import * as cdk from 'aws-cdk-lib'
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs'
import { type Stage, getResourcePrefix } from '../utils/stage'

interface DynamodbStackProps extends cdk.StackProps {
  stage: Stage
}

export class DynamodbStack extends cdk.Stack {
  public readonly linksTable: dynamodb.Table
  public readonly clicksTable: dynamodb.Table

  constructor(scope: Construct, id: string, props: DynamodbStackProps) {
    super(scope, id, props)

    const prefix = getResourcePrefix(props.stage)
    const removalPolicy =
      props.stage === 'prod' ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY

    this.linksTable = new dynamodb.Table(this, 'LinksTable', {
      tableName: `${prefix}links`,
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'SK', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      timeToLiveAttribute: 'expiresAt',
      // Streams needed for TTL expiration → notification Lambda
      stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
      removalPolicy,
    })

    // Get all links/notifications by user, sorted by date
    this.linksTable.addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'createdAt', type: dynamodb.AttributeType.NUMBER },
    })

    // Sort links by popularity (clickCount)
    this.linksTable.addGlobalSecondaryIndex({
      indexName: 'GSI2',
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'clickCount', type: dynamodb.AttributeType.NUMBER },
    })

    this.clicksTable = new dynamodb.Table(this, 'ClicksTable', {
      tableName: `${prefix}clicks`,
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'SK', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy,
    })

    new cdk.CfnOutput(this, 'LinksTableName', { value: this.linksTable.tableName })
    new cdk.CfnOutput(this, 'LinksTableStreamArn', { value: this.linksTable.tableStreamArn! })
    new cdk.CfnOutput(this, 'ClicksTableName', { value: this.clicksTable.tableName })
  }
}
