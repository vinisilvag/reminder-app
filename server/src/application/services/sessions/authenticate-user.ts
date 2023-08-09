import { type IUser, User } from '@application/models/user'

import { UserNotFound } from '@application/errors/user-not-found'
import { InvalidCredentials } from '@application/errors/invalid-credentials'

import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { SECRET } from '@config/env/auth'

interface AuthenticateUserRequest {
  email: string
  password: string
}

interface AuthenticateUserResponse {
  token: string
  user: IUser
}

export class AuthenticateUser {
  public async execute(
    request: AuthenticateUserRequest
  ): Promise<AuthenticateUserResponse> {
    const { email, password } = request

    const user = await User.findOne({ email })

    if (!user) {
      throw new UserNotFound()
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new InvalidCredentials()
    }

    const token = sign({}, SECRET, {
      subject: user.id,
      expiresIn: '15m'
    })

    return { token, user }
  }
}
