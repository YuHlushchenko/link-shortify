export type Stage = 'dev' | 'prod'

const isProd = (stage: Stage) => stage === 'prod'

/**
 * Lowercase prefix for resource names (S3, DynamoDB, UserPool, subdomains).
 * prod → "" | dev → "dev-"
 */
export function getResourcePrefix(stage: Stage): string {
  return isProd(stage) ? '' : stage + '-'
}

/**
 * PascalCase prefix for Lambda function names, log groups, API names.
 * prod → "" | dev → "Dev-"
 */
export function getLambdaPrefix(stage: Stage): string {
  return isProd(stage) ? '' : stage.charAt(0).toUpperCase() + stage.slice(1) + '-'
}

/**
 * PascalCase prefix (no dash) for stack construct IDs and CfnOutput exportNames.
 * prod → "" | dev → "Dev"
 */
export function getStackPrefix(stage: Stage): string {
  return isProd(stage) ? '' : stage.charAt(0).toUpperCase() + stage.slice(1)
}
