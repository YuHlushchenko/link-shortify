import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { AuthStack } from '../lib/auth-stack'

const CERT_ARN = 'arn:aws:acm:us-east-1:123456789012:certificate/test-cert-id'

beforeAll(() => {
  process.env.GOOGLE_CLIENT_SECRET = 'test-google-secret'
})

describe('AuthStack', () => {
  it('dev matches snapshot', () => {
    const app = new cdk.App()
    const stack = new AuthStack(app, 'TestStack', {
      stage: 'dev',
      domainName: 'test.example.com',
      certificateArn: CERT_ARN,
    })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })

  it('prod matches snapshot', () => {
    const app = new cdk.App()
    const stack = new AuthStack(app, 'TestStack', {
      stage: 'prod',
      domainName: 'test.example.com',
      certificateArn: CERT_ARN,
    })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })
})
