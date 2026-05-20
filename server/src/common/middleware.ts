import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpResponseSerializer from '@middy/http-response-serializer'
import { APIGatewayProxyEventV2WithJWTAuthorizer } from 'aws-lambda'

type LambdaFn = (event: APIGatewayProxyEventV2WithJWTAuthorizer) => Promise<{ statusCode: number; body?: unknown }>

export function createHandler(fn: LambdaFn) {
  return middy()
    .use(httpHeaderNormalizer())
    .use(httpErrorHandler())
    .use(
      httpResponseSerializer({
        serializers: [
          {
            regex: /^application\/json$/,
            serializer: ({ body }) => JSON.stringify(body),
          },
        ],
        defaultContentType: 'application/json',
      }),
    )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .handler(fn as any)
}
