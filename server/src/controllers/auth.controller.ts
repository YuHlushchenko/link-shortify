import { Request, Response } from 'express'

import userService from '@services/user.service'
import tokenService from '@services/token.service'
import mailService from '@services/mail.service'

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body

      const userData = await userService.createUser(username, email, password)
      const tokens = tokenService.generateToken({ ...userData.user })

      await tokenService.saveToken(userData.user._id, tokens.refreshToken)

      await mailService.sendActivationMail(
        email,
        `${process.env.API_URL}/api/auth/activateEmail/${userData.activationLink}`,
      )

      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true, //! for cookie not to be available for client-side JS
        // secure: true, // TODO: for https
      })

      res.status(201).json(userData.user) // without password, tokens and activationLink
    } catch (error) {
      res.status(500).json({ message: 'Server error', error })
    }
  }
}

export default new AuthController()
