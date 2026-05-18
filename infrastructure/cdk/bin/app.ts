#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config()

import * as cdk from 'aws-cdk-lib'
import { type Stage, getStackPrefix } from '../utils/stage'
import { GithubOidcStack } from '../lib/github-oidc-stack'

const app = new cdk.App()

const account = process.env.CDK_DEFAULT_ACCOUNT
const region = process.env.CDK_DEFAULT_REGION
const stage: Stage = (process.env.STAGE || 'dev') as Stage
const stackPrefix = getStackPrefix(stage)

// One-time setup — deploy manually via: yarn cdk deploy DevGithubOidcStack --profile shortify
// Never deployed through CI (OIDC provider is account-wide, not per-stage)
if (stage === 'dev') {
  new GithubOidcStack(app, `${stackPrefix}GithubOidcStack`, {
    env: { account, region },
  })
}
