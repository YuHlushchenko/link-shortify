import {
  SchedulerClient,
  CreateScheduleCommand,
  DeleteScheduleCommand,
  FlexibleTimeWindowMode,
  ActionAfterCompletion,
} from '@aws-sdk/client-scheduler'
import { createLayerLogger } from '../common/logger'
import { LogLayer } from '../common/types'

const logger = createLayerLogger(LogLayer.SERVICE)

const schedulerClient = new SchedulerClient({})

const SCHEDULER_ROLE_ARN = process.env.SCHEDULER_ROLE_ARN!
const EXPIRE_LINK_FUNCTION_ARN = process.env.EXPIRE_LINK_FUNCTION_ARN!

function scheduleName(slug: string): string {
  return `link-expiry-${slug}`
}

export class SchedulerService {
  async scheduleExpiry(
    slug: string,
    userId: string | undefined,
    expiresAt: number,
  ): Promise<void> {
    const scheduleAt = new Date(expiresAt * 1000).toISOString().slice(0, 19)

    await schedulerClient.send(
      new CreateScheduleCommand({
        Name: scheduleName(slug),
        ScheduleExpression: `at(${scheduleAt})`,
        ScheduleExpressionTimezone: 'UTC',
        Target: {
          Arn: EXPIRE_LINK_FUNCTION_ARN,
          RoleArn: SCHEDULER_ROLE_ARN,
          Input: JSON.stringify({ slug, userId }),
        },
        FlexibleTimeWindow: { Mode: FlexibleTimeWindowMode.OFF },
        ActionAfterCompletion: ActionAfterCompletion.DELETE,
      }),
    )

    logger.info({ text: 'expiry schedule created', slug, expiresAt })
  }

  async cancelExpiry(slug: string): Promise<void> {
    try {
      await schedulerClient.send(
        new DeleteScheduleCommand({ Name: scheduleName(slug) }),
      )
      logger.info({ text: 'expiry schedule cancelled', slug })
    } catch (err: unknown) {
      if ((err as { name?: string }).name === 'ResourceNotFoundException')
        return
      throw err
    }
  }
}
