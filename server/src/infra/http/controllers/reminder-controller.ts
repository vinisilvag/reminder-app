import { type Request, type Response } from 'express'

import { GetRemindersByAuthor } from '@application/services/reminders/get-reminders-by-author'
import { CreateReminder } from '@application/services/reminders/create-reminder'
import { DeleteReminder } from '@application/services/reminders/delete-reminder'

import { createReminderBody } from '@infra/http/dtos/create-reminder-body'

import { ReminderViewModel } from '../view-models/reminder-view-model'
import { deleteReminderParams } from '../dtos/delete-reminder-params'

export class ReminderController {
  public async index(request: Request, response: Response) {
    const { id } = request.user

    const getRemindersByAuthor = new GetRemindersByAuthor()
    const { reminders } = await getRemindersByAuthor.execute({ author: id })

    return response.status(200).json({
      reminders: reminders.map(reminder => ReminderViewModel.toHTTP(reminder))
    })
  }

  public async create(request: Request, response: Response) {
    const { id } = request.user
    const { message } = createReminderBody.parse(request.body)

    const createReminder = new CreateReminder()
    const { reminder } = await createReminder.execute({ message, author: id })

    return response
      .status(201)
      .json({ reminder: ReminderViewModel.toHTTP(reminder) })
  }

  public async delete(request: Request, response: Response) {
    const { reminderId } = deleteReminderParams.parse(request.params)

    const deleteReminder = new DeleteReminder()
    await deleteReminder.execute({ reminderId })

    return response.status(204).send()
  }
}
