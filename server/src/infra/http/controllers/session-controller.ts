import { type Request, type Response } from 'express'

import { AuthenticateUser } from '@application/services/sessions/authenticate-user'
import { GetProfile } from '@application/services/sessions/get-profile'

import { authenticateUserBody } from '../dtos/authenticate-user-body'

import { UserViewModel } from '../view-models/user-view-model'

export class SessionController {
  public async authenticate(request: Request, response: Response) {
    const { email, password } = authenticateUserBody.parse(request.body)

    const authenticateUser = new AuthenticateUser()
    const { token, user } = await authenticateUser.execute({
      email,
      password
    })

    return response
      .status(200)
      .json({ token, user: UserViewModel.toHTTP(user) })
  }

  public async me(request: Request, response: Response) {
    const { id } = request.user

    const getProfile = new GetProfile()
    const { user } = await getProfile.execute({
      userId: id
    })

    return response.status(200).json({ user: UserViewModel.toHTTP(user) })
  }
}
