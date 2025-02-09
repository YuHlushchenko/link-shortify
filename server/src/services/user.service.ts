import bcrypt from 'bcrypt'
import { v4 } from 'uuid'

import User from '@models/User'
import { UserDto } from '@dtos/user.dto'

class UserService {
  async createUser(username: string, email: string, password: string) {
    const candidate = await User.findOne({ email })
    if (candidate) {
      throw new Error('User with this email already exists')
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
      throw new Error('Wrong activation link')
    }

    user.isActivated = true    
    await user.save()
  }
}

export default new UserService()
