import * as cdk from 'aws-cdk-lib'
import { Template, Match } from 'aws-cdk-lib/assertions'
import { DynamodbStack } from '../lib/dynamodb-stack'

describe('DynamodbStack', () => {
  describe('dev', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const stack = new DynamodbStack(app, 'TestStack', { stage: 'dev' })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('linksTable uses PAY_PER_REQUEST billing', () => {
      template.hasResourceProperties('AWS::DynamoDB::Table', {
        TableName: 'dev-links',
        BillingMode: 'PAY_PER_REQUEST',
      })
    })

    it('linksTable has GSI1 (userId + createdAt), GSI2 (userId + clickCount), GSI3 (anonymousId + createdAt)', () => {
      template.hasResourceProperties('AWS::DynamoDB::Table', {
        TableName: 'dev-links',
        GlobalSecondaryIndexes: Match.arrayWith([
          Match.objectLike({ IndexName: 'GSI1', KeySchema: Match.arrayWith([Match.objectLike({ AttributeName: 'userId', KeyType: 'HASH' }), Match.objectLike({ AttributeName: 'createdAt', KeyType: 'RANGE' })]) }),
          Match.objectLike({ IndexName: 'GSI2', KeySchema: Match.arrayWith([Match.objectLike({ AttributeName: 'userId', KeyType: 'HASH' }), Match.objectLike({ AttributeName: 'clickCount', KeyType: 'RANGE' })]) }),
          Match.objectLike({ IndexName: 'GSI3', KeySchema: Match.arrayWith([Match.objectLike({ AttributeName: 'anonymousId', KeyType: 'HASH' }), Match.objectLike({ AttributeName: 'createdAt', KeyType: 'RANGE' })]) }),
        ]),
      })
    })

    it('both tables have DESTROY removal policy', () => {
      template.allResources('AWS::DynamoDB::Table', {
        DeletionPolicy: 'Delete',
        UpdateReplacePolicy: 'Delete',
      })
    })
  })

  describe('prod', () => {
    let template: Template

    beforeAll(() => {
      const app = new cdk.App()
      const stack = new DynamodbStack(app, 'TestStack', { stage: 'prod' })
      template = Template.fromStack(stack)
    })

    it('matches snapshot', () => {
      expect(template.toJSON()).toMatchSnapshot()
    })

    it('both tables have RETAIN removal policy', () => {
      template.allResources('AWS::DynamoDB::Table', {
        DeletionPolicy: 'Retain',
        UpdateReplacePolicy: 'Retain',
      })
    })

    it('table names have no stage prefix', () => {
      template.hasResourceProperties('AWS::DynamoDB::Table', { TableName: 'links' })
      template.hasResourceProperties('AWS::DynamoDB::Table', { TableName: 'clicks' })
    })
  })
})
