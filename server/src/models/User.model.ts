import mongoose, { Schema, InferSchemaType, Document, Types } from 'mongoose'

export interface IUser {
  _id: Types.ObjectId
  username: string
  email: string
  password: string
  isActivated: boolean
  activationLink: string
}

interface IUserDocument extends Document<Types.ObjectId>, Omit<IUser, '_id'> {}

const UserSchema = new Schema<IUserDocument>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
})

export type IUserSchema = InferSchemaType<typeof UserSchema>

export default mongoose.model<IUserDocument>('User', UserSchema)
