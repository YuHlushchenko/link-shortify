import { NextFunction, Request, Response } from 'express'

import tokenService from '@services/token.service'

import ApiError from '@exeptions/apiError'

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return next(ApiError.UnauthorizedError())
    }

    const accessToken = authHeader.split(' ')[1]
    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }

    const userData = tokenService.validateAccessToken(accessToken)
    if (!userData) {
      return next(ApiError.UnauthorizedError())
    }

    req.user = userData
    next()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`❌ Error: ${error}`)

    next(ApiError.UnauthorizedError())
  }
}
