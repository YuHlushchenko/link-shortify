#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config()

import * as cdk from 'aws-cdk-lib'
import { type Stage, getStackPrefix } from '../utils/stage'
import { GithubOidcStack } from '../lib/github-oidc-stack'
import { CertificateStack } from '../lib/certificate-stack'
import { DynamodbStack } from '../lib/dynamodb-stack'

const app = new cdk.App()

const account = process.env.CDK_DEFAULT_ACCOUNT
const region = process.env.CDK_DEFAULT_REGION
const stage: Stage = (process.env.STAGE || 'dev') as Stage
const stackPrefix = getStackPrefix(stage)
const domainName = process.env.DOMAIN_NAME!

// One-time setup — deploy manually via: yarn cdk deploy DevGithubOidcStack --profile shortify
// Never deployed through CI (OIDC provider is account-wide, not per-stage)
if (stage === 'dev') {
  new GithubOidcStack(app, `${stackPrefix}GithubOidcStack`, {
    env: { account, region },
  })
}

// Must be in us-east-1 — required by CloudFront and Cognito custom domain
new CertificateStack(app, `${stackPrefix}CertificateStack`, {
  env: { account, region: 'us-east-1' },
  crossRegionReferences: true,
  stage,
  domainName,
})

new DynamodbStack(app, `${stackPrefix}DynamodbStack`, {
  env: { account, region },
  stage,
})
