import { model, Schema, type Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  avatar: string | null
  password: string
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    avatar: {
      type: String,
      default: null
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const User = model<IUser>('User', userSchema)
