import { ObjectId } from 'mongoose'

import { IUser } from '@models/User'

export class UserDto {
  _id: ObjectId
  username: string
  email: string
  isActivated: boolean

  constructor(model: IUser) {
    this._id = model._id
    this.username = model.username
    this.email = model.email
    this.isActivated = model.isActivated
  }
}
