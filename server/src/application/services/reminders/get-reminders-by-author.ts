import { type IReminder, Reminder } from '@application/models/reminder'

interface GetRemindersByAuthorRequest {
  author: string
}

interface GetRemindersByAuthorResponse {
  reminders: IReminder[]
}

export class GetRemindersByAuthor {
  public async execute(
    request: GetRemindersByAuthorRequest
  ): Promise<GetRemindersByAuthorResponse> {
    const { author } = request

    const reminders = await Reminder.find({ author }).sort({
      createdAt: 'desc'
    })

    return { reminders }
  }
}
