import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { DynamodbStack } from '../lib/dynamodb-stack'

describe('DynamodbStack', () => {
  it('dev matches snapshot', () => {
    const app = new cdk.App()
    const stack = new DynamodbStack(app, 'TestStack', { stage: 'dev' })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })

  it('prod matches snapshot', () => {
    const app = new cdk.App()
    const stack = new DynamodbStack(app, 'TestStack', { stage: 'prod' })
    expect(Template.fromStack(stack).toJSON()).toMatchSnapshot()
  })
})
