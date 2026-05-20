import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as apigwv2Integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as apigwv2Authorizers from "aws-cdk-lib/aws-apigatewayv2-authorizers";
import * as logs from "aws-cdk-lib/aws-logs";
import * as iam from "aws-cdk-lib/aws-iam";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { AuthStack } from "./auth-stack";
import { DynamodbStack } from "./dynamodb-stack";
import { getLambdaPath } from "../utils/get-lambda-path";
import { type Stage, getLambdaPrefix, getStackPrefix } from "../utils/stage";

interface ApiStackProps extends cdk.StackProps {
  authStack: AuthStack;
  dynamodbStack: DynamodbStack;
  stage: Stage;
}

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const fnPrefix = getLambdaPrefix(props.stage);
    const stackPrefix = getStackPrefix(props.stage);

    // ── JWT Authorizer ────────────────────────────────────────────────────────
    const jwtAuthorizer = new apigwv2Authorizers.HttpJwtAuthorizer(
      "JwtAuthorizer",
      `https://cognito-idp.${this.region}.amazonaws.com/${props.authStack.userPoolId}`,
      {
        jwtAudience: [props.authStack.userPoolClientId],
        identitySource: ["$request.header.Authorization"],
      },
    );

    // ── HTTP API ──────────────────────────────────────────────────────────────
    const httpApi = new apigwv2.HttpApi(this, "HttpApi", {
      apiName: `${fnPrefix}link-shortify-api`,
      corsPreflight: {
        allowHeaders: ["Content-Type", "Authorization"],
        allowMethods: [
          apigwv2.CorsHttpMethod.GET,
          apigwv2.CorsHttpMethod.POST,
          apigwv2.CorsHttpMethod.PATCH,
          apigwv2.CorsHttpMethod.DELETE,
        ],
        allowOrigins: ["*"],
      },
    });

    // ── Common env vars ───────────────────────────────────────────────────────
    const commonEnv = {
      LOG_LEVEL: "info",
      LINKS_TABLE_NAME: props.dynamodbStack.linksTable.tableName,
      CLICKS_TABLE_NAME: props.dynamodbStack.clicksTable.tableName,
    };

    // ── Lambda factory ────────────────────────────────────────────────────────
    const createFn = (
      id: string,
      entry: string,
      extraEnv?: Record<string, string>,
    ) => {
      const logGroup = new logs.LogGroup(this, `${id}LogGroup`, {
        logGroupName: `/aws/lambda/${fnPrefix}${id}`,
        retention: logs.RetentionDays.THREE_MONTHS,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      });

      return new NodejsFunction(this, id, {
        entry: getLambdaPath(`lambdas/${entry}`),
        handler: "handler",
        functionName: `${fnPrefix}${id}`,
        runtime: lambda.Runtime.NODEJS_22_X,
        memorySize: 256,
        timeout: cdk.Duration.seconds(29),
        logGroup,
        environment: { ...commonEnv, ...extraEnv },
        bundling: {
          // @aws-sdk/* is available natively in Node 22 runtime
          externalModules: ["@aws-sdk/*"],
        },
      });
    };

    // ── expire-link Lambda (EventBridge Scheduler target) ─────────────────────
    // Defined first so its ARN can be passed as env var to other lambdas
    const expireLinkLambda = createFn("ExpireLinkFunction", "expire-link.ts");

    // ── IAM role for EventBridge Scheduler to invoke expire-link ──────────────
    const schedulerRole = new iam.Role(this, "SchedulerInvokeRole", {
      assumedBy: new iam.ServicePrincipal("scheduler.amazonaws.com"),
      inlinePolicies: {
        InvokeExpireLink: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ["lambda:InvokeFunction"],
              resources: [expireLinkLambda.functionArn],
            }),
          ],
        }),
      },
    });

    const schedulerEnv = {
      SCHEDULER_ROLE_ARN: schedulerRole.roleArn,
      EXPIRE_LINK_FUNCTION_ARN: expireLinkLambda.functionArn,
    };

    // ── Lambda functions ──────────────────────────────────────────────────────
    const redirectLambda = createFn("RedirectFunction", "redirect.ts");
    const getLinksLambda = createFn("GetLinksFunction", "get-links.ts");
    const createLinkLambda = createFn(
      "CreateLinkFunction",
      "create-link.ts",
      schedulerEnv,
    );
    const updateLinkLambda = createFn(
      "UpdateLinkFunction",
      "update-link.ts",
      schedulerEnv,
    );
    const deleteLinkLambda = createFn(
      "DeleteLinkFunction",
      "delete-link.ts",
      schedulerEnv,
    );
    const bulkDeleteLinksLambda = createFn(
      "BulkDeleteLinksFunction",
      "bulk-delete-links.ts",
      schedulerEnv,
    );
    const getClicksLambda = createFn("GetClicksFunction", "get-clicks.ts");
    const getNotificationsLambda = createFn(
      "GetNotificationsFunction",
      "get-notifications.ts",
    );
    const updateNotificationLambda = createFn(
      "UpdateNotificationFunction",
      "update-notification.ts",
    );
    const updateAllNotificationsLambda = createFn(
      "UpdateAllNotificationsFunction",
      "update-all-notifications.ts",
    );
    const deleteAccountLambda = createFn(
      "DeleteAccountFunction",
      "delete-account.ts",
      {
        USER_POOL_ID: props.authStack.userPoolId,
        ...schedulerEnv,
      },
    );

    // ── DynamoDB permissions ──────────────────────────────────────────────────
    const linksTable = props.dynamodbStack.linksTable;
    const clicksTable = props.dynamodbStack.clicksTable;

    // public redirect — read links, write clicks
    linksTable.grantReadWriteData(redirectLambda);
    clicksTable.grantWriteData(redirectLambda);

    // read-only
    [getLinksLambda, getNotificationsLambda].forEach((fn) =>
      linksTable.grantReadData(fn),
    );

    // read + write
    [
      createLinkLambda,
      updateLinkLambda,
      deleteLinkLambda,
      bulkDeleteLinksLambda,
      updateNotificationLambda,
      updateAllNotificationsLambda,
      deleteAccountLambda,
      expireLinkLambda,
    ].forEach((fn) => linksTable.grantReadWriteData(fn));

    // get-clicks needs read on both tables
    linksTable.grantReadData(getClicksLambda);
    clicksTable.grantReadData(getClicksLambda);

    // ── EventBridge Scheduler permissions ────────────────────────────────────
    const schedulerLambdas = [
      createLinkLambda,
      updateLinkLambda,
      deleteLinkLambda,
      bulkDeleteLinksLambda,
      deleteAccountLambda,
    ];

    schedulerLambdas.forEach((fn) => {
      fn.addToRolePolicy(
        new iam.PolicyStatement({
          actions: ["scheduler:CreateSchedule", "scheduler:DeleteSchedule"],
          resources: ["*"],
        }),
      );
      fn.addToRolePolicy(
        new iam.PolicyStatement({
          actions: ["iam:PassRole"],
          resources: [schedulerRole.roleArn],
        }),
      );
    });

    // ── Cognito permission for delete-account ─────────────────────────────────
    deleteAccountLambda.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["cognito-idp:AdminDeleteUser"],
        resources: [
          `arn:aws:cognito-idp:${this.region}:${this.account}:userpool/${props.authStack.userPoolId}`,
        ],
      }),
    );

    // ── Routes ────────────────────────────────────────────────────────────────
    const addRoute = (
      path: string,
      method: apigwv2.HttpMethod,
      fn: NodejsFunction,
      authorizer?: apigwv2Authorizers.HttpJwtAuthorizer,
    ) => {
      httpApi.addRoutes({
        path,
        methods: [method],
        integration: new apigwv2Integrations.HttpLambdaIntegration(
          `${fn.node.id}Integration`,
          fn,
        ),
        ...(authorizer ? { authorizer } : {}),
      });
    };

    addRoute("/s/{slug}", apigwv2.HttpMethod.GET, redirectLambda);
    addRoute("/links", apigwv2.HttpMethod.GET, getLinksLambda, jwtAuthorizer);
    addRoute(
      "/links",
      apigwv2.HttpMethod.POST,
      createLinkLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/links/{slug}",
      apigwv2.HttpMethod.PATCH,
      updateLinkLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/links/{slug}",
      apigwv2.HttpMethod.DELETE,
      deleteLinkLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/links",
      apigwv2.HttpMethod.DELETE,
      bulkDeleteLinksLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/links/{slug}/clicks",
      apigwv2.HttpMethod.GET,
      getClicksLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/notifications",
      apigwv2.HttpMethod.GET,
      getNotificationsLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/notifications/{notificationId}",
      apigwv2.HttpMethod.PATCH,
      updateNotificationLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/notifications",
      apigwv2.HttpMethod.PATCH,
      updateAllNotificationsLambda,
      jwtAuthorizer,
    );
    addRoute(
      "/auth/account",
      apigwv2.HttpMethod.DELETE,
      deleteAccountLambda,
      jwtAuthorizer,
    );

    // ── Outputs ───────────────────────────────────────────────────────────────
    new cdk.CfnOutput(this, "ApiUrl", {
      value: httpApi.apiEndpoint,
      exportName: `${stackPrefix}ApiUrl`,
    });
  }
}
