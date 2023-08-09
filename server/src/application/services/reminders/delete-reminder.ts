import { Reminder } from '@application/models/reminder'

import { ReminderNotFound } from '@application/errors/reminder-not-found'

interface DeleteReminderRequest {
  reminderId: string
}

export class DeleteReminder {
  public async execute(request: DeleteReminderRequest): Promise<void> {
    const { reminderId } = request

    const reminder = await Reminder.findById(reminderId)

    if (!reminder) {
      throw new ReminderNotFound()
    }

    await reminder.deleteOne()
  }
}
