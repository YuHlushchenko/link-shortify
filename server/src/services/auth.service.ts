import bcrypt from 'bcrypt'

import User from '@models/User.model'

import { UserDto } from '@dtos/user.dto'

import ApiError from '@exeptions/apiError'

class AuthService {
  async login(email: string, password: string) {
    const user = await User.findOne({ email })
    if (!user) {
      throw ApiError.BadRequest('User not found')
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password)
    if (!isPasswordEquals) {
      throw ApiError.BadRequest('Incorrect password')
    }

    const userDto = new UserDto(user)

    return userDto
  }
}

export default new AuthService()
