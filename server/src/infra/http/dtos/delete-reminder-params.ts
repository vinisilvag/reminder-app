import { z } from 'zod'

export const deleteReminderParams = z.object({
  reminderId: z.string()
})
