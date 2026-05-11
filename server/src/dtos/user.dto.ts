import { IUser } from '@models/User.model'

export class UserDto {
  _id: string
  username: string
  email: string
  isActivated: boolean

  constructor(model: IUser) {
    this._id = model._id.toString()
    this.username = model.username
    this.email = model.email
    this.isActivated = model.isActivated
  }
}
