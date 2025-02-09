import bcrypt from 'bcrypt'
import { v4 } from 'uuid'

import User from '@models/User'
import { UserDto } from '@dtos/user.dto'

import mailService from './mail.service'
import tokenService from './token.service'

class UserService {
  async register(username: string, email: string, password: string) {
    const candidate = await User.findOne({ email })
    if (candidate) {
      throw new Error('User with this email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 5)
    const activationLink = v4()

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      activationLink,
    })
    await mailService.sendActivationMail(
      email,
      `${process.env.CLIENT_DOMAIN}/api/activate/${activationLink}`,
    )
    const userDto = new UserDto(user)
    const tokens = tokenService.generateToken({ ...userDto })
    await tokenService.saveToken(userDto._id, tokens.refreshToken)
    return { ...tokens, user: userDto }
  }
}

export default new UserService()
