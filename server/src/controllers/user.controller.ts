import { Request, Response } from 'express'

import userService from '@services/user.service'

class UserController {
  // async getUsers(req: Request, res: Response) {}
  // async getUserById(req: Request, res: Response) {}
//   async updateUser(req: Request, res: Response) {}
  // async deleteUser(req: Request, res: Response) {}
  async activateUser(req: Request, res: Response) {
    try {
      const { link } = req.params
      console.log('link:', link)
      await userService.activateEmail(link)

      res.redirect(`${process.env.CLIENT_DOMAIN}`)
    } catch (error) {
      res.status(500).json({ message: 'Server error', error })
    }
  }
}

export default new UserController()
