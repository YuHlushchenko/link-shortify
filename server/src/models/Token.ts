import mongoose, { Schema, InferSchemaType } from 'mongoose'

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  refreshToken: { type: String, required: true },
})

type IToken = InferSchemaType<typeof TokenSchema>

export default mongoose.model<IToken>('Token', TokenSchema)
