import { model, Schema, type Types, type Document } from 'mongoose'

export interface IReminder extends Document {
  message: string | null
  author: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const reminderSchema = new Schema<IReminder>(
  {
    message: {
      type: String,
      default: null
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

export const Reminder = model<IReminder>('Reminder', reminderSchema)
