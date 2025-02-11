import bcrypt from 'bcrypt'
import { v4 } from 'uuid'

import User from '@models/User.model'

import { UserDto } from '@dtos/user.dto'

import ApiError from '@exeptions/apiError'

class UserService {
  async createUser(username: string, email: string, password: string) {
    const candidate = await User.findOne({ email })
    if (candidate) {
      throw ApiError.BadRequest('User with this email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 5)
    const activationLink = v4() // example: 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      activationLink,
    })

    const userDto = new UserDto(user)

    return {
      user: userDto,
      activationLink,
    }
  }
  async activateEmail(activationLink: string) {
    const user = await User.findOne({ activationLink })

    if (!user) {
      throw ApiError.BadRequest('Incorrect activation link')
    }

    user.isActivated = true
    await user.save()
  }
  async getAllUsers() {
    const users = await User.find()

    return users
  }
}

export default new UserService()
