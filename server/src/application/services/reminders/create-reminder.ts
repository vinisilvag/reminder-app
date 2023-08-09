import { type IReminder, Reminder } from '@application/models/reminder'

interface CreateReminderRequest {
  message?: string
  author: string
}

interface CreateReminderResponse {
  reminder: IReminder
}

export class CreateReminder {
  public async execute(
    request: CreateReminderRequest
  ): Promise<CreateReminderResponse> {
    const { message, author } = request

    const reminder = await Reminder.create({
      message: message || null,
      author
    })

    return { reminder }
  }
}
