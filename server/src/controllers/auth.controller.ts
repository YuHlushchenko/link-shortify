import { NextFunction, Request, Response } from 'express'

import { validationResult } from 'express-validator'
import { JwtPayload } from 'jsonwebtoken'

import { ENV_VARIABLES } from '@configs/envSettings'

import User from '@models/User.model'

import { UserDto } from '@dtos/user.dto'

import userService from '@services/user.service'
import tokenService from '@services/token.service'
import mailService from '@services/mail.service'
import authService from '@services/auth.service'

import ApiError from '@exeptions/apiError'

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const validationErrors = validationResult(req)
      if (!validationErrors.isEmpty()) {
        return next(
          ApiError.BadRequest('Validation error', validationErrors.array()),
        )
      }
      const { username, email, password } = req.body

      const userData = await userService.createUser(username, email, password)
      const tokens = tokenService.generateToken({ ...userData.user })

      await tokenService.saveToken(userData.user._id, tokens.refreshToken)

      await mailService.sendActivationMail(
        email,
        `${ENV_VARIABLES.API_URL}/api/user/activateEmail/${userData.activationLink}`, // TODO: create change to CLIENT_DOMAIN
      )

      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true, //! for cookie not to be available for client-side JS
        // secure: true, // TODO: for https
      })

      res.status(201).json(userData.user)
    } catch (error) {
      next(error)
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const userData = await authService.login(email, password)
      const tokens = tokenService.generateToken({ ...userData })

      await tokenService.saveToken(userData._id, tokens.refreshToken)

      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true, //! for cookie not to be available for client-side JS
        // secure: true, // TODO: for https
      })

      res.status(200).json({
        user: userData,
        tokens, // TODO: remove in production
      })
    } catch (error) {
      next(error)
    }
  }
  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies

      await tokenService.removeToken(refreshToken)

      res.clearCookie('refreshToken')

      res.status(200).json('User logged out')
    } catch (error) {
      next(error)
    }
  }
  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies
      if (!refreshToken) {
        throw ApiError.UnauthorizedError()
      }

      const userData = tokenService.validateRefreshToken(refreshToken)
      const tokenData = await tokenService.findToken(refreshToken)
      if (!userData || !tokenData) {
        throw ApiError.UnauthorizedError()
      }

      const userDataDB = await User.findOne({
        _id: (userData as JwtPayload)._id,
      })
      if (!userDataDB) {
        throw ApiError.UnauthorizedError()
      }

      const userDataDto = new UserDto(userDataDB)

      const tokens = tokenService.generateToken({ ...userDataDto })
      await tokenService.saveToken(userDataDto._id, tokens.refreshToken)

      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true, //! for cookie not to be available for client-side JS
        // secure: true, // TODO: for https
      })

      res.status(200).json(userData)
    } catch (error) {
      next(error)
    }
  }
}

export default new AuthController()
