import {
  CreateTableCommand,
  DeleteTableCommand,
  DynamoDBClient,
  ListTablesCommand,
} from '@aws-sdk/client-dynamodb'

const ENDPOINT = process.env.DYNAMODB_ENDPOINT ?? 'http://localhost:8000'
const LINKS_TABLE = 'test-links'
const CLICKS_TABLE = 'test-clicks'

const client = new DynamoDBClient({
  endpoint: ENDPOINT,
  region: 'us-east-1',
  credentials: { accessKeyId: 'local', secretAccessKey: 'local' },
})

async function waitForDynamoDB(retries = 10) {
  for (let i = 0; i < retries; i++) {
    try {
      await client.send(new ListTablesCommand({}))
      return
    } catch {
      if (i < retries - 1) await new Promise((r) => setTimeout(r, 1000))
    }
  }
  throw new Error(`DynamoDB Local not available at ${ENDPOINT}`)
}

async function dropTables() {
  await Promise.allSettled([
    client.send(new DeleteTableCommand({ TableName: LINKS_TABLE })),
    client.send(new DeleteTableCommand({ TableName: CLICKS_TABLE })),
  ])
}

async function createTables() {
  await client.send(
    new CreateTableCommand({
      TableName: LINKS_TABLE,
      KeySchema: [
        { AttributeName: 'PK', KeyType: 'HASH' },
        { AttributeName: 'SK', KeyType: 'RANGE' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'PK', AttributeType: 'S' },
        { AttributeName: 'SK', AttributeType: 'S' },
        { AttributeName: 'userId', AttributeType: 'S' },
        { AttributeName: 'createdAt', AttributeType: 'N' },
        { AttributeName: 'clickCount', AttributeType: 'N' },
        { AttributeName: 'anonymousId', AttributeType: 'S' },
      ],
      GlobalSecondaryIndexes: [
        {
          IndexName: 'GSI1',
          KeySchema: [
            { AttributeName: 'userId', KeyType: 'HASH' },
            { AttributeName: 'createdAt', KeyType: 'RANGE' },
          ],
          Projection: { ProjectionType: 'ALL' },
        },
        {
          IndexName: 'GSI2',
          KeySchema: [
            { AttributeName: 'userId', KeyType: 'HASH' },
            { AttributeName: 'clickCount', KeyType: 'RANGE' },
          ],
          Projection: { ProjectionType: 'ALL' },
        },
        {
          IndexName: 'GSI3',
          KeySchema: [
            { AttributeName: 'anonymousId', KeyType: 'HASH' },
            { AttributeName: 'createdAt', KeyType: 'RANGE' },
          ],
          Projection: { ProjectionType: 'ALL' },
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    }),
  )

  await client.send(
    new CreateTableCommand({
      TableName: CLICKS_TABLE,
      KeySchema: [
        { AttributeName: 'PK', KeyType: 'HASH' },
        { AttributeName: 'SK', KeyType: 'RANGE' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'PK', AttributeType: 'S' },
        { AttributeName: 'SK', AttributeType: 'S' },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    }),
  )
}

export async function setup() {
  await waitForDynamoDB()
  await dropTables()
  await createTables()
}

export async function teardown() {
  await dropTables()
}
