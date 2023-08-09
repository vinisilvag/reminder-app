import { Router } from 'express'

import { userRoutes } from './user-routes'
import { sessionRoutes } from './session-routes'
import { reminderRoutes } from './reminder-routes'

const appRoutes = Router()

appRoutes.use('/users', userRoutes)
appRoutes.use('/session', sessionRoutes)
appRoutes.use('/reminders', reminderRoutes)

export { appRoutes }
