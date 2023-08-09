import { type Request, type Response } from 'express'

import { CreateUser } from '@application/services/users/create-user'
import { GetUsers } from '@application/services/users/get-users'

import { createUserBody } from '@infra/http/dtos/create-user-body'

import { UserViewModel } from '../view-models/user-view-model'

export class UserController {
  public async index(request: Request, response: Response) {
    const getUsers = new GetUsers()
    const { users } = await getUsers.execute()

    return response
      .status(200)
      .json({ users: users.map(user => UserViewModel.toHTTP(user)) })
  }

  public async create(request: Request, response: Response) {
    const { name, email, password } = createUserBody.parse(request.body)

    const createUser = new CreateUser()
    const { user } = await createUser.execute({ name, email, password })

    return response.status(201).json({ user: UserViewModel.toHTTP(user) })
  }
}
