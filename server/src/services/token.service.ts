import jwt, { SignOptions } from 'jsonwebtoken'

import Token from '@models/Token'
import { ObjectId } from 'mongoose'

class TokenService {
  generateToken(payload: object): {
    accessToken: string
    refreshToken: string
  } {
    if (!process.env.JWT_ACCESS_SECRET) {
      throw new Error('JWT_ACCESS_SECRET не визначено в змінних середовища.')
    }

    if (!process.env.JWT_REFRESH_SECRET) {
      throw new Error('JWT_REFRESH_SECRET не визначено в змінних середовища.')
    }

    const signAccessOptions: SignOptions = {
      expiresIn:
        (process.env.JWT_EXPIRES_IN as SignOptions['expiresIn']) ?? '1h',
    }

    const signRefreshOptions: SignOptions = {
      expiresIn:
        (process.env.JWT_REFRESH_EXPIRES_IN as SignOptions['expiresIn']) ??
        '30d',
    }

    const accessToken = jwt.sign(
      payload,
      process.env.JWT_ACCESS_SECRET,
      signAccessOptions,
    )
    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_SECRET,
      signRefreshOptions,
    )

    return {
      accessToken,
      refreshToken,
    }
  }
  async saveToken(userId: ObjectId, refreshToken: string) {
    const tokenData = await Token.findOne({ user: userId })

    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }

    const token = await Token.create({ user: userId, refreshToken })
    return token
  }
}

export default new TokenService()
