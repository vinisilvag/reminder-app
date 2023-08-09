import { Router } from 'express'

import { UserController } from '@infra/http/controllers/user-controller'

import { ensureAuthenticated } from '@infra/http/middlewares/ensure-authenticated'

const userRoutes = Router()
const userController = new UserController()

userRoutes.get('/', ensureAuthenticated, userController.index)
userRoutes.post('/', userController.create)

export { userRoutes }
