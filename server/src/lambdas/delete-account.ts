import {
  CognitoIdentityProviderClient,
  AdminDeleteUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { LinksRepository } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const cognito = new CognitoIdentityProviderClient({});
const linksService = new LinksService(new LinksRepository());

export const handler = createHandler(async (event) => {
  const claims = event.requestContext.authorizer.jwt.claims;
  const userId = claims.sub as string;
  const username = (claims["cognito:username"] ?? userId) as string;

  // delete data first — if Cognito deletion fails, user can still authenticate and retry
  await linksService.deleteAllUserLinks(userId);

  await cognito.send(
    new AdminDeleteUserCommand({
      UserPoolId: process.env.USER_POOL_ID!,
      Username: username,
    }),
  );

  logger.info({ text: "DELETE /auth/account", userId });

  return { statusCode: 204 };
});
