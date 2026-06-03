import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { GithubOidcStack } from '../lib/github-oidc-stack'

it('GithubOidcStack matches snapshot', () => {
  const app = new cdk.App()
  const stack = new GithubOidcStack(app, 'TestStack')
  expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
})
