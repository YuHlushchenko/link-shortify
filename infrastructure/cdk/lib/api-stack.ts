import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as apigwv2Integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as apigwv2Authorizers from "aws-cdk-lib/aws-apigatewayv2-authorizers";
import * as logs from "aws-cdk-lib/aws-logs";
import * as iam from "aws-cdk-lib/aws-iam";
import * as events from "aws-cdk-lib/aws-events";
import * as targets from "aws-cdk-lib/aws-events-targets";
import * as sns from "aws-cdk-lib/aws-sns";
import * as snsSubscriptions from "aws-cdk-lib/aws-sns-subscriptions";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import * as cloudwatchActions from "aws-cdk-lib/aws-cloudwatch-actions";
import * as budgets from "aws-cdk-lib/aws-budgets";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { AuthStack } from "./auth-stack";
import { DynamodbStack } from "./dynamodb-stack";
import { getLambdaPath } from "../utils/get-lambda-path";
import { buildDashboardBody } from "./dashboard-body";
import { type Stage, getLambdaPrefix, getStackPrefix, getResourcePrefix } from "../utils/stage";

interface ApiStackProps extends cdk.StackProps {
  authStack: AuthStack;
  dynamodbStack: DynamodbStack;
  stage: Stage;
  domainName: string;
  // If provided, CloudWatch alarms + budget alerts are created (prod only)
  alertEmail?: string;
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
      LOG_LEVEL: props.stage === "prod" ? "info" : "debug",
      STAGE: props.stage,
      LINKS_TABLE_NAME: props.dynamodbStack.linksTable.tableName,
      CLICKS_TABLE_NAME: props.dynamodbStack.clicksTable.tableName,
      PAGE_LIMIT: "20",
      BULK_CHUNK_SIZE: "100",
    };

    // ── Lambda factory ────────────────────────────────────────────────────────
    const createFn = (
      id: string,
      entry: string,
      extraEnv?: Record<string, string>,
      memorySize = 256,
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
        memorySize,
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

    const upstashEnv = {
      UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL!,
      UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN!,
      RATE_LIMIT_PER_MINUTE: "10",
      RATE_LIMIT_PER_DAY: "200",
    };

    // ── Anonymous link env vars ───────────────────────────────────────────────
    const anonEnv = {
      ANON_LINK_LIMIT: "5",
    };

    // ── Lambda functions ──────────────────────────────────────────────────────
    const redirectLambda = createFn("RedirectFunction", "redirect.ts", undefined, 512);
    const getLinksLambda = createFn("GetLinksFunction", "get-links.ts");
    const createLinkLambda = createFn(
      "CreateLinkFunction",
      "create-link.ts",
      { ...schedulerEnv, ...upstashEnv },
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

    const createLinkAnonLambda = createFn(
      "CreateLinkAnonFunction",
      "create-link-anon.ts",
      { ...anonEnv, ...schedulerEnv, ...upstashEnv },
    );
    const getLinksAnonLambda = createFn("GetLinksAnonFunction", "get-links-anon.ts");
    const claimLinksLambda = createFn("ClaimLinksFunction", "claim-links.ts");

    // ── DynamoDB permissions ──────────────────────────────────────────────────
    const linksTable = props.dynamodbStack.linksTable;
    const clicksTable = props.dynamodbStack.clicksTable;

    // public redirect — read links, write clicks
    linksTable.grantReadWriteData(redirectLambda);
    clicksTable.grantWriteData(redirectLambda);

    // read-only
    [getLinksLambda, getNotificationsLambda, getLinksAnonLambda].forEach((fn) =>
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
      createLinkAnonLambda,
      claimLinksLambda,
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
    addRoute("/links/anonymous", apigwv2.HttpMethod.POST, createLinkAnonLambda);
    addRoute("/links/anonymous", apigwv2.HttpMethod.GET, getLinksAnonLambda);
    addRoute("/auth/claim", apigwv2.HttpMethod.POST, claimLinksLambda, jwtAuthorizer);
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

    // ── Redirect Lambda optimizations (prod only) ─────────────────────────────
    if (props.stage === "prod") {
      new events.Rule(this, "RedirectLambdaWarmer", {
        ruleName: "redirect-lambda-warmer",
        schedule: events.Schedule.rate(cdk.Duration.minutes(5)),
        description: "Keep redirect Lambda warm to reduce cold starts",
        targets: [
          new targets.LambdaFunction(redirectLambda, {
            event: events.RuleTargetInput.fromObject({ warmer: true, concurrency: 1 }),
          }),
        ],
      });
    }

    // ── Custom domain ─────────────────────────────────────────────────────────
    const apiDomain = `${getResourcePrefix(props.stage)}api.${props.domainName}`;

    const certificate = new acm.Certificate(this, "ApiCertificate", {
      domainName: apiDomain,
      validation: acm.CertificateValidation.fromDns(),
    });

    const domainName = new apigwv2.DomainName(this, "ApiDomainName", {
      domainName: apiDomain,
      certificate,
    });

    new apigwv2.ApiMapping(this, "ApiMapping", {
      api: httpApi,
      domainName,
    });

    // ── CloudWatch Dashboard ──────────────────────────────────────────────────
    if (props.stage === "prod") new cdk.aws_cloudwatch.CfnDashboard(this, "Dashboard", {
      dashboardName: `link-shortify-${props.stage}`,
      dashboardBody: buildDashboardBody({
        region: this.region,
        apiId: httpApi.apiId,
        linksTableName: linksTable.tableName,
        clicksTableName: clicksTable.tableName,
        redirectFunctionName: redirectLambda.functionName,
        createLinkFunctionName: createLinkLambda.functionName,
        createLinkAnonFunctionName: createLinkAnonLambda.functionName,
        getLinksFunctionName: getLinksLambda.functionName,
        updateLinkFunctionName: updateLinkLambda.functionName,
        deleteLinkFunctionName: deleteLinkLambda.functionName,
        bulkDeleteLinksFunctionName: bulkDeleteLinksLambda.functionName,
        getClicksFunctionName: getClicksLambda.functionName,
        getNotificationsFunctionName: getNotificationsLambda.functionName,
        updateNotificationFunctionName: updateNotificationLambda.functionName,
        updateAllNotificationsFunctionName: updateAllNotificationsLambda.functionName,
        claimLinksFunctionName: claimLinksLambda.functionName,
        deleteAccountFunctionName: deleteAccountLambda.functionName,
        expireLinkFunctionName: expireLinkLambda.functionName,
      }),
    });

    // ── Alerts (prod only) ────────────────────────────────────────────────────
    if (props.stage === "prod" && props.alertEmail) {
      // SNS topic — single destination for all alerts
      const alertTopic = new sns.Topic(this, "AlertTopic", {
        topicName: "link-shortify-alerts",
        displayName: "Link-Shortify Alerts",
      });
      alertTopic.addSubscription(
        new snsSubscriptions.EmailSubscription(props.alertEmail),
      );
      // Allow AWS Budgets to publish to this topic
      alertTopic.addToResourcePolicy(
        new iam.PolicyStatement({
          principals: [new iam.ServicePrincipal("budgets.amazonaws.com")],
          actions: ["SNS:Publish"],
          resources: [alertTopic.topicArn],
        }),
      );

      // ── API Gateway access logs ──────────────────────────────────────────
      // Access logs capture every request with status code, route, and error
      // details — needed for 429 metric filter and 5xx root-cause tracing.
      const accessLogGroup = new logs.LogGroup(this, "ApiAccessLogGroup", {
        logGroupName: `/aws/apigateway/${fnPrefix}link-shortify`,
        retention: logs.RetentionDays.THREE_MONTHS,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      });
      accessLogGroup.grantWrite(
        new iam.ServicePrincipal("apigateway.amazonaws.com"),
      );

      const cfnStage = httpApi.defaultStage!.node.defaultChild as apigwv2.CfnStage;
      cfnStage.accessLogSettings = {
        destinationArn: accessLogGroup.logGroupArn,
        format: JSON.stringify({
          requestId: "$context.requestId",
          status: "$context.status",
          routeKey: "$context.routeKey",
          errorMessage: "$context.error.message",
          integrationError: "$context.integration.error",
          integrationStatus: "$context.integration.status",
          timestamp: "$context.requestTimeEpoch",
          sourceIp: "$context.identity.sourceIp",
        }),
      };

      // ── Metric filters ───────────────────────────────────────────────────
      // 429 on POST /links (auth) or POST /links/anonymous — abuse detection
      new logs.MetricFilter(this, "Links429Filter", {
        logGroup: accessLogGroup,
        filterPattern: logs.FilterPattern.literal(
          '{ $.status = "429" && ($.routeKey = "POST /links" || $.routeKey = "POST /links/anonymous") }',
        ),
        metricNamespace: "LinkShortify",
        metricName: "Links429Count",
        metricValue: "1",
        defaultValue: 0,
      });

      // 5xx from any endpoint — unhandled errors or Lambda/integration failures
      new logs.MetricFilter(this, "Api5xxFilter", {
        logGroup: accessLogGroup,
        filterPattern: logs.FilterPattern.literal(
          '{ $.status = "500" || $.status = "502" || $.status = "503" || $.status = "504" }',
        ),
        metricNamespace: "LinkShortify",
        metricName: "Api5xxCount",
        metricValue: "1",
        defaultValue: 0,
      });

      // ── CloudWatch Alarms ────────────────────────────────────────────────
      const alarm = (
        id: string,
        metric: cloudwatch.IMetric,
        threshold: number,
        name: string,
        description: string,
      ) =>
        new cloudwatch.Alarm(this, id, {
          metric,
          threshold,
          evaluationPeriods: 1,
          alarmName: name,
          alarmDescription: description,
          treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING,
          comparisonOperator:
            cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
        }).addAlarmAction(new cloudwatchActions.SnsAction(alertTopic));

      // 1) Redirect Lambda unhandled error — direct Lambda Errors metric
      alarm(
        "RedirectErrorsAlarm",
        redirectLambda.metricErrors({ period: cdk.Duration.minutes(5) }),
        1,
        "link-shortify-redirect-errors",
        `RedirectFunction threw an unhandled error.\nLogs: /aws/lambda/${fnPrefix}RedirectFunction`,
      );

      // 2) Abuse: rate limit (429) triggered ≥3 times in 5 min on /links
      alarm(
        "Links429Alarm",
        new cloudwatch.Metric({
          namespace: "LinkShortify",
          metricName: "Links429Count",
          statistic: "Sum",
          period: cdk.Duration.minutes(5),
        }),
        3,
        "link-shortify-rate-limit-abuse",
        `429 rate limit triggered ≥3 times in 5 min on POST /links.\nAccess logs: /aws/apigateway/${fnPrefix}link-shortify`,
      );

      // 3) Any 5xx from the API
      alarm(
        "Api5xxAlarm",
        new cloudwatch.Metric({
          namespace: "LinkShortify",
          metricName: "Api5xxCount",
          statistic: "Sum",
          period: cdk.Duration.minutes(5),
        }),
        1,
        "link-shortify-5xx-errors",
        `5xx error detected.\nAccess logs: /aws/apigateway/${fnPrefix}link-shortify\nLambda logs: /aws/lambda/${fnPrefix}<FunctionName>`,
      );

      // 4) Redirect Lambda throttled by Lambda concurrency limits
      alarm(
        "RedirectThrottlesAlarm",
        redirectLambda.metricThrottles({ period: cdk.Duration.minutes(5) }),
        1,
        "link-shortify-redirect-throttles",
        `RedirectFunction is being throttled (Lambda concurrency limit reached).\nCheck: CloudWatch → Lambda → ${fnPrefix}RedirectFunction → Concurrency`,
      );

      // 5) Redirect p99 latency — PRD target <100ms; p99 >500ms signals real degradation
      alarm(
        "RedirectDurationAlarm",
        redirectLambda.metricDuration({
          period: cdk.Duration.minutes(5),
          statistic: "p99",
        }),
        500,
        "link-shortify-redirect-latency",
        `RedirectFunction p99 duration exceeded 500ms.\nLogs: /aws/lambda/${fnPrefix}RedirectFunction`,
      );

      // 6) create-link Lambda errors — critical write path, direct alarm is more reliable than 5xx filter
      alarm(
        "CreateLinkErrorsAlarm",
        createLinkLambda.metricErrors({ period: cdk.Duration.minutes(5) }),
        1,
        "link-shortify-create-link-errors",
        `CreateLinkFunction threw an unhandled error.\nLogs: /aws/lambda/${fnPrefix}CreateLinkFunction`,
      );

      // 7) DynamoDB throttled requests — PAY_PER_REQUEST can still throttle on hot partitions
      alarm(
        "DynamoThrottlesAlarm",
        props.dynamodbStack.linksTable.metric("ThrottledRequests", {
          period: cdk.Duration.minutes(5),
          statistic: "Sum",
        }),
        1,
        "link-shortify-dynamo-throttles",
        `DynamoDB links table is throttling requests (hot partition).\nCheck: CloudWatch → DynamoDB → ${props.dynamodbStack.linksTable.tableName}`,
      );

      // ── Budget alert ─────────────────────────────────────────────────────
      // Sends email when actual spend exceeds $0.05/month (the cost target).
      // Uses direct email subscriber (no SNS needed for budget).
      new budgets.CfnBudget(this, "MonthlyBudget", {
        budget: {
          budgetName: "link-shortify-monthly",
          budgetType: "COST",
          timeUnit: "MONTHLY",
          budgetLimit: { amount: 0.05, unit: "USD" },
        },
        notificationsWithSubscribers: [
          {
            notification: {
              notificationType: "ACTUAL",
              comparisonOperator: "GREATER_THAN",
              threshold: 80,
              thresholdType: "PERCENTAGE",
            },
            subscribers: [{ subscriptionType: "EMAIL", address: props.alertEmail }],
          },
          {
            notification: {
              notificationType: "ACTUAL",
              comparisonOperator: "GREATER_THAN",
              threshold: 100,
              thresholdType: "PERCENTAGE",
            },
            subscribers: [
              { subscriptionType: "EMAIL", address: props.alertEmail },
              { subscriptionType: "SNS", address: alertTopic.topicArn },
            ],
          },
        ],
      });
    }

    // ── Outputs ───────────────────────────────────────────────────────────────
    new cdk.CfnOutput(this, "ApiUrl", {
      value: httpApi.apiEndpoint,
      exportName: `${stackPrefix}ApiUrl`,
    });

    new cdk.CfnOutput(this, "ApiDomainTarget", {
      value: domainName.regionalDomainName,
      exportName: `${stackPrefix}ApiDomainTarget`,
      description: `CNAME target for ${apiDomain} in Cloudflare`,
    });
  }
}
