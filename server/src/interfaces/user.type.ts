import { IUser } from '@models/User'

export interface ICreateUser extends Omit<IUser, '_id'> {}

export interface IUpdateUser extends Partial<ICreateUser> {
  username: string
  email: string
}
