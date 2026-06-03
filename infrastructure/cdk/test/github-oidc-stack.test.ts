import * as cdk from 'aws-cdk-lib'
import { Template, Match } from 'aws-cdk-lib/assertions'
import { GithubOidcStack, GITHUB_REPO } from '../lib/github-oidc-stack'

describe('GithubOidcStack', () => {
  let template: Template

  beforeAll(() => {
    const app = new cdk.App()
    const stack = new GithubOidcStack(app, 'TestStack')
    template = Template.fromStack(stack)
  })

  it('matches snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot()
  })

  it('OIDC provider points to GitHub Actions URL', () => {
    template.hasResourceProperties('Custom::AWSCDKOpenIdConnectProvider', {
      Url: 'https://token.actions.githubusercontent.com',
      ClientIDList: ['sts.amazonaws.com'],
    })
  })

  it('deploy role is restricted to main branch of correct repo', () => {
    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'GitHubActionsRole-link-shortify',
      AssumeRolePolicyDocument: Match.objectLike({
        Statement: Match.arrayWith([
          Match.objectLike({
            Action: 'sts:AssumeRoleWithWebIdentity',
            Condition: {
              StringEquals: { 'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com' },
              StringLike: { 'token.actions.githubusercontent.com:sub': `repo:${GITHUB_REPO}:ref:refs/heads/main` },
            },
          }),
        ]),
      }),
    })
  })

  it('deploy role max session duration is 1 hour', () => {
    template.hasResourceProperties('AWS::IAM::Role', {
      RoleName: 'GitHubActionsRole-link-shortify',
      MaxSessionDuration: 3600,
    })
  })
})
