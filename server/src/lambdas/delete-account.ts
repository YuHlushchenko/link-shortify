import {
  CognitoIdentityProviderClient,
  AdminDeleteUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { LinksRepository } from "../repositories/links.repository";
import { LinksService } from "../services/links.service";
import { SchedulerService } from "../services/scheduler.service";
import { NotificationsRepository } from "../repositories/notifications.repository";
import { createHandler } from "../common/middleware";
import { createLayerLogger } from "../common/logger";
import { LogLayer } from "../common/types";

const logger = createLayerLogger(LogLayer.LAMBDA);

const cognito = new CognitoIdentityProviderClient({});
const linksService = new LinksService(new LinksRepository(), new SchedulerService());
const notificationsRepository = new NotificationsRepository();

export const handler = createHandler(async (event) => {
  const claims = event.requestContext.authorizer.jwt.claims;
  const userId = claims.sub as string;
  const username = (claims["cognito:username"] ?? userId) as string;

  // delete data first — if Cognito deletion fails, user can still authenticate and retry
  const [linksResult, notificationsResult] = await Promise.allSettled([
    linksService.deleteAllUserLinks(userId),
    notificationsRepository.deleteAllByUser(userId),
  ]);
  if (linksResult.status === "rejected")
    logger.error({ text: "failed to delete user links", userId, error: linksResult.reason?.message });
  if (notificationsResult.status === "rejected")
    logger.error({ text: "failed to delete user notifications", userId, error: notificationsResult.reason?.message });

  await cognito.send(
    new AdminDeleteUserCommand({
      UserPoolId: process.env.USER_POOL_ID!,
      Username: username,
    }),
  );

  logger.info({ text: "DELETE /auth/account", userId });

  return { statusCode: 204 };
});
