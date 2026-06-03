import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { ApiStack } from '../lib/api-stack'
import { AuthStack } from '../lib/auth-stack'
import { DynamodbStack } from '../lib/dynamodb-stack'

const CERT_ARN = 'arn:aws:acm:us-east-1:123456789012:certificate/test-cert-id'

beforeAll(() => {
  process.env.GOOGLE_CLIENT_SECRET = 'test-google-secret'
  process.env.UPSTASH_REDIS_REST_URL = 'https://test.upstash.io'
  process.env.UPSTASH_REDIS_REST_TOKEN = 'test-upstash-token'
})

function makeDeps(app: cdk.App, stage: 'dev' | 'prod') {
  const dynamodbStack = new DynamodbStack(app, 'DynamoStack', { stage })
  const authStack = new AuthStack(app, 'AuthStack', {
    stage,
    domainName: 'test.example.com',
    certificateArn: CERT_ARN,
  })
  return { dynamodbStack, authStack }
}

describe('ApiStack', () => {
  it('dev matches snapshot', () => {
    const app = new cdk.App()
    app.node.setContext('aws:cdk:bundling-stacks', [])
    const { dynamodbStack, authStack } = makeDeps(app, 'dev')
    const stack = new ApiStack(app, 'ApiStack', {
      stage: 'dev',
      domainName: 'test.example.com',
      authStack,
      dynamodbStack,
    })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })

  it('prod with alertEmail matches snapshot', () => {
    const app = new cdk.App()
    app.node.setContext('aws:cdk:bundling-stacks', [])
    const { dynamodbStack, authStack } = makeDeps(app, 'prod')
    const stack = new ApiStack(app, 'ApiStack', {
      stage: 'prod',
      domainName: 'test.example.com',
      authStack,
      dynamodbStack,
      alertEmail: 'test@example.com',
    })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })
})
