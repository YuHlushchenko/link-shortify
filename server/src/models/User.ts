import mongoose, { Schema, InferSchemaType, Document, ObjectId } from 'mongoose'

export interface IUser {
  _id: ObjectId
  username: string
  email: string
  password?: string
  isActivated: boolean
  activationLink: string
}

interface IUserDocument extends Document, Omit<IUser, '_id'> {
  _id: ObjectId
}

const UserSchema = new Schema<IUserDocument>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
})

export type IUserSchema = InferSchemaType<typeof UserSchema>

export default mongoose.model<IUserSchema>('User', UserSchema)
