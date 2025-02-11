import { UserPayload } from '@interfaces/user.type'

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserPayload
  }
}
