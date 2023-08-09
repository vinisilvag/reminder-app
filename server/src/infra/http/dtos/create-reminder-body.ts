import { z } from 'zod'

export const createReminderBody = z.object({
  message: z.string()
})
