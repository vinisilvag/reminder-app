import { type Types } from 'mongoose'
import { type IReminder } from '@application/models/reminder'

interface HTTPReminder {
  id: string
  message: string | null
  author: Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

export class ReminderViewModel {
  static toHTTP(reminder: IReminder): HTTPReminder {
    return {
      id: reminder._id,
      message: reminder.message,
      author: reminder.author,
      createdAt: reminder.createdAt,
      updatedAt: reminder.updatedAt
    }
  }
}
