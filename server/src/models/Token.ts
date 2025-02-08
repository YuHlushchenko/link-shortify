import mongoose, { Schema, InferSchemaType, ObjectId, Document } from 'mongoose'

export interface IToken {
  user: ObjectId
  refreshToken: string
}

interface ITokenDocument extends IToken, Document {}

const TokenSchema = new Schema<ITokenDocument>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  refreshToken: { type: String, required: true },
})

type ITokenSchema = InferSchemaType<typeof TokenSchema>

export default mongoose.model<ITokenSchema>('Token', TokenSchema)
