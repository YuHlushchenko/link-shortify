import * as cdk from 'aws-cdk-lib'
import * as iam from 'aws-cdk-lib/aws-iam'
import { Construct } from 'constructs'

const GITHUB_OIDC_DOMAIN = 'token.actions.githubusercontent.com'
const GITHUB_OIDC_URL = `https://${GITHUB_OIDC_DOMAIN}`
const GITHUB_REPO = 'YuHlushchenko/link-shortify'

export class GithubOidcStack extends cdk.Stack {
  public readonly deployRoleArn: string

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const provider = new iam.OpenIdConnectProvider(this, 'GitHubOidcProvider', {
      url: GITHUB_OIDC_URL,
      clientIds: ['sts.amazonaws.com'],
    })

    const deployRole = new iam.Role(this, 'GitHubActionsDeployRole', {
      roleName: 'GitHubActionsRole-link-shortify',
      description: 'Assumed by GitHub Actions for link-shortify deployments via OIDC',
      maxSessionDuration: cdk.Duration.hours(1),
      assumedBy: new iam.WebIdentityPrincipal(provider.openIdConnectProviderArn, {
        StringEquals: {
          [`${GITHUB_OIDC_DOMAIN}:aud`]: 'sts.amazonaws.com',
        },
        StringLike: {
          [`${GITHUB_OIDC_DOMAIN}:sub`]: `repo:${GITHUB_REPO}:ref:refs/heads/main`,
        },
      }),
    })

    // AdministratorAccess is used here for simplicity on a pet project.
    // For production, replace with a scoped custom policy.
    deployRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
    )

    this.deployRoleArn = deployRole.roleArn

    new cdk.CfnOutput(this, 'DeployRoleArn', {
      value: deployRole.roleArn,
      description: 'Paste into GitHub Actions workflow: role-to-assume',
    })
  }
}
