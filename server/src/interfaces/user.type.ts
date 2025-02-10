import { IUser } from '@models/User.model'

export interface ICreateUser extends Omit<IUser, '_id'> {}

export interface IUpdateUser extends Partial<ICreateUser> {
  username: string
  email: string
}
