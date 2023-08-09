import { Router } from 'express'

import { ReminderController } from '@infra/http/controllers/reminder-controller'

import { ensureAuthenticated } from '@infra/http/middlewares/ensure-authenticated'

const reminderRoutes = Router()
const reminderController = new ReminderController()

reminderRoutes.get('/', ensureAuthenticated, reminderController.index)
reminderRoutes.post('/', ensureAuthenticated, reminderController.create)
reminderRoutes.delete(
  '/:reminderId',
  ensureAuthenticated,
  reminderController.delete
)

export { reminderRoutes }
