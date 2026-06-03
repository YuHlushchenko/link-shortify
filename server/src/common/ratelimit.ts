import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import createHttpError from 'http-errors'

const prefix = `rl:${process.env.STAGE ?? 'dev'}`
const RATE_LIMIT_PER_MINUTE = parseInt(
  process.env.RATE_LIMIT_PER_MINUTE ?? '10',
  10,
)
const RATE_LIMIT_PER_DAY = parseInt(process.env.RATE_LIMIT_PER_DAY ?? '200', 10)

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const ratelimit = {
  perMinute: new Ratelimit({
    redis,
    prefix: `${prefix}:minute`,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_PER_MINUTE, '1 m'),
  }),
  perDay: new Ratelimit({
    redis,
    prefix: `${prefix}:day`,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_PER_DAY, '1 d'),
  }),
}

export async function checkRateLimit(identifier: string): Promise<void> {
  const [minute, day] = await Promise.all([
    ratelimit.perMinute.limit(identifier),
    ratelimit.perDay.limit(identifier),
  ])

  if (!minute.success || !day.success) {
    throw createHttpError.TooManyRequests('Rate limit exceeded')
  }
}
