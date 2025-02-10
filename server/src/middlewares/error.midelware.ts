import { NextFunction, Request, Response } from 'express'

import ApiError from '@exeptions/apiError'

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction, //! middleware must have 4 arguments
): Response<any, Record<string, any>> => {
  // eslint-disable-next-line no-console
  console.error(`❌ Error: ${err.message}`)

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors })
  }

  return res.status(500).json({ message: 'Unexpected error' })
}

export default errorMiddleware
