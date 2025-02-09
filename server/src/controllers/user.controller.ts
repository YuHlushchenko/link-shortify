import { NextFunction, Request, Response } from 'express'

import userService from '@services/user.service'

class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body

      const userData = await userService.register(username, email, password)

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true, // for cookie not to be available for client-side JS
        // secure: true, // TODO: for https
      })
      res.status(201).json(userData)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Помилка сервера222', error })
    }
  }
}

export default new UserController()
