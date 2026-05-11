import mongoose, { Schema, InferSchemaType, Document, Types } from 'mongoose'

export interface ILink {
  _id: Types.ObjectId
  originalUrl: string
  shortSlug: string
  clicks: number
  isActive: boolean
}

interface ILinkDocument extends Document<Types.ObjectId>, Omit<ILink, '_id'> {}

const LinkSchema = new Schema<ILinkDocument>({
  originalUrl: { type: String, required: true },
  shortSlug: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
})

export type ILinkSchema = InferSchemaType<typeof LinkSchema>

export default mongoose.model<ILinkDocument>('Link', LinkSchema)
