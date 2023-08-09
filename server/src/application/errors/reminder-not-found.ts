import { AppError } from '@helpers/app-error'

export class ReminderNotFound extends AppError {
  constructor() {
    super(404, 'Reminder not found.')
  }
}
