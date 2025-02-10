import jwt, { SignOptions } from 'jsonwebtoken'
import { ObjectId } from 'mongoose'

import { ENV_VARIABLES } from '@configs/envSettings'

import Token from '@models/Token.model'

class TokenService {
  generateToken(payload: object): {
    accessToken: string
    refreshToken: string
  } {
    const signAccessOptions: SignOptions = {
      expiresIn:
        (ENV_VARIABLES.JWT_EXPIRES_IN as SignOptions['expiresIn']) ?? '1h',
    }

    const signRefreshOptions: SignOptions = {
      expiresIn:
        (ENV_VARIABLES.JWT_REFRESH_EXPIRES_IN as SignOptions['expiresIn']) ??
        '30d',
    }

    const accessToken = jwt.sign(
      payload,
      ENV_VARIABLES.JWT_ACCESS_SECRET as string,
      signAccessOptions,
    )
    const refreshToken = jwt.sign(
      payload,
      ENV_VARIABLES.JWT_REFRESH_SECRET as string,
      signRefreshOptions,
    )

    return {
      accessToken,
      refreshToken,
    }
  }
  validateAccessToken(token: string) {
    const userData = jwt.verify(
      token,
      ENV_VARIABLES.JWT_ACCESS_SECRET as string,
    )

    if (!userData) {
      return null
    }

    return userData as jwt.JwtPayload
  }
  validateRefreshToken(token: string) {
    const userData = jwt.verify(
      token,
      ENV_VARIABLES.JWT_REFRESH_SECRET as string,
    )

    if (!userData) {
      return null
    }

    return userData
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
  async removeToken(refreshToken: string) {
    const tokenData = await Token.deleteOne({ refreshToken })

    return tokenData
  }
  async findToken(refreshToken: string) {
    const token = await Token.findOne({
      refreshToken,
    })

    return token
  }
}

export default new TokenService()
