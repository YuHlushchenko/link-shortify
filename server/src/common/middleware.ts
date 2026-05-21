import middy from "@middy/core";
import httpErrorHandler from "@middy/http-error-handler";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import httpResponseSerializer from "@middy/http-response-serializer";
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyEventV2WithJWTAuthorizer,
} from "aws-lambda";

const responseSerializer = httpResponseSerializer({
  serializers: [
    {
      regex: /^application\/json$/,
      serializer: ({ body }) => JSON.stringify(body),
    },
  ],
  defaultContentType: "application/json",
});

type LambdaFn = (
  event: APIGatewayProxyEventV2WithJWTAuthorizer,
) => Promise<{ statusCode: number; body?: unknown }>;

type PublicLambdaFn = (
  event: APIGatewayProxyEventV2,
) => Promise<{ statusCode: number; body?: unknown }>;

export function createHandler(fn: LambdaFn) {
  return (
    middy()
      .use(httpHeaderNormalizer())
      .use(httpErrorHandler())
      .use(responseSerializer)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .handler(fn as any)
  );
}

export function createPublicHandler(fn: PublicLambdaFn) {
  return (
    middy()
      .use(httpHeaderNormalizer())
      .use(httpErrorHandler())
      .use(responseSerializer)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .handler(fn as any)
  );
}
