import mongoose, { Schema, InferSchemaType, Document, ObjectId } from 'mongoose'

export interface ILink {
  _id: ObjectId
  originalUrl: string
  shortSlug: string
  clicks: number
  isActive: boolean
}

interface ILinkDocument extends Document, Omit<ILink, '_id'> {}

const LinkSchema: Schema = new Schema<ILinkDocument>({
  originalUrl: { type: String, required: true },
  shortSlug: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
})

export type ILinkSchema = InferSchemaType<typeof LinkSchema>

export default mongoose.model<ILinkSchema>('Link', LinkSchema)
