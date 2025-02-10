import { NextFunction, Request, Response } from 'express'
import { ENV_VARIABLES } from 'configs/envSettings'

import userService from '@services/user.service'

class UserController {
  // async getUsers(req: Request, res: Response) {}
  // async getUserById(req: Request, res: Response) {}
  // async updateUser(req: Request, res: Response) {}
  // async deleteUser(req: Request, res: Response) {}
  // async changePassword(req: Request, res: Response) {}
  // async forgotPassword(req: Request, res: Response) {}
  // async resetPassword(req: Request, res: Response) {}
  async activate(req: Request, res: Response, next: NextFunction) {
    try {
      const { link } = req.params

      await userService.activateEmail(link)

      res.redirect(`${ENV_VARIABLES.CLIENT_DOMAIN}`)
    } catch (error) {
      next(error)
    }
  }
}

export default new UserController()
