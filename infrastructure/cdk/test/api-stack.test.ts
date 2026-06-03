import * as cdk from 'aws-cdk-lib'
import { Template, Match } from 'aws-cdk-lib/assertions'
import { ApiStack } from '../lib/api-stack'
import { AuthStack } from '../lib/auth-stack'
import { DynamodbStack } from '../lib/dynamodb-stack'

// NodejsFunction bundles Lambda code with esbuild and hashes the bundled output.
// The hash includes absolute file paths, so snapshots differ between machines and CI.
// Replacing with a plain Function + inline code produces a deterministic, path-independent snapshot.
jest.mock('aws-cdk-lib/aws-lambda-nodejs', () => {
  const { Function, Runtime, Code } = require('aws-cdk-lib/aws-lambda')
  return {
    NodejsFunction: class extends Function {
      constructor(scope: any, id: string, props: any) {
        super(scope, id, {
          runtime: Runtime.NODEJS_22_X,
          handler: props.handler ?? 'index.handler',
          code: Code.fromInline('exports.handler = async () => {}'),
          functionName: props.functionName,
          memorySize: props.memorySize ?? 256,
          timeout: props.timeout,
          logGroup: props.logGroup,
          environment: props.environment,
        })
      }
    },
  }
})

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
  describe('dev', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const { dynamodbStack, authStack } = makeDeps(app, 'dev')
      const stack = new ApiStack(app, 'ApiStack', {
        stage: 'dev',
        domainName: 'test.example.com',
        authStack,
        dynamodbStack,
      })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('creates exactly 15 Lambda functions', () => {
      template.resourceCountIs('AWS::Lambda::Function', 15)
    })

    it('all Lambda functions use nodejs22.x runtime', () => {
      template.allResourcesProperties('AWS::Lambda::Function', {
        Runtime: 'nodejs22.x',
      })
    })

    it('RedirectFunction has 512 MB memory', () => {
      template.hasResourceProperties('AWS::Lambda::Function', {
        FunctionName: 'Dev-RedirectFunction',
        MemorySize: 512,
      })
    })

    it('other Lambda functions have 256 MB memory', () => {
      template.hasResourceProperties('AWS::Lambda::Function', {
        FunctionName: 'Dev-CreateLinkFunction',
        MemorySize: 256,
        Timeout: 29,
      })
    })

    it('no CloudWatch alarms in dev', () => {
      template.resourceCountIs('AWS::CloudWatch::Alarm', 0)
    })

    it('no SNS topic in dev', () => {
      template.resourceCountIs('AWS::SNS::Topic', 0)
    })

    it('no budget in dev', () => {
      template.resourceCountIs('AWS::Budgets::Budget', 0)
    })

    it('no Lambda warmer EventBridge rule in dev', () => {
      template.resourceCountIs('AWS::Events::Rule', 0)
    })
  })

  describe('prod', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const { dynamodbStack, authStack } = makeDeps(app, 'prod')
      const stack = new ApiStack(app, 'ApiStack', {
        stage: 'prod',
        domainName: 'test.example.com',
        authStack,
        dynamodbStack,
        alertEmail: 'test@example.com',
      })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('creates exactly 7 CloudWatch alarms', () => {
      template.resourceCountIs('AWS::CloudWatch::Alarm', 7)
    })

    it('creates SNS alert topic', () => {
      template.resourceCountIs('AWS::SNS::Topic', 1)
      template.hasResourceProperties('AWS::SNS::Topic', {
        TopicName: 'link-shortify-alerts',
      })
    })

    it('creates monthly budget', () => {
      template.resourceCountIs('AWS::Budgets::Budget', 1)
      template.hasResourceProperties('AWS::Budgets::Budget', {
        Budget: Match.objectLike({
          BudgetType: 'COST',
          TimeUnit: 'MONTHLY',
        }),
      })
    })

    it('creates Lambda warmer EventBridge rule', () => {
      template.hasResourceProperties('AWS::Events::Rule', {
        Name: 'redirect-lambda-warmer',
        ScheduleExpression: 'rate(5 minutes)',
      })
    })
  })
})
