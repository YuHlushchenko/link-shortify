import mongoose, { Schema, InferSchemaType } from 'mongoose'

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
})

export type IUser = InferSchemaType<typeof UserSchema>

export default mongoose.model<IUser>('User', UserSchema)
