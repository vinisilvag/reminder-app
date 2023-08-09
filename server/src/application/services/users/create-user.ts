import { type IUser, User } from '@application/models/user'

import { UserAlreadyExists } from '@application/errors/user-already-exists'

import { hash } from 'bcrypt'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

interface CreateUserResponse {
  user: IUser
}

export class CreateUser {
  public async execute(
    request: CreateUserRequest
  ): Promise<CreateUserResponse> {
    const { name, email, password } = request

    const userExists = await User.findOne({ email })

    if (userExists) {
      throw new UserAlreadyExists()
    }

    const hashedPassword = await hash(password, 12)

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    return { user }
  }
}
