import { JwtPayload } from 'jsonwebtoken'

import { IUser } from '@models/User.model'

export interface ICreateUser extends Omit<IUser, '_id'> {}

export interface IUpdateUser extends Partial<ICreateUser> {
  username: string
  email: string
}

export interface UserPayload extends JwtPayload {
  _id: string
  username: string
  email: string
  isActivated: boolean
}
