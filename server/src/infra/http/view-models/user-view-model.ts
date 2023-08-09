import { type IUser } from '@application/models/user'

interface HTTPUser {
  id: string
  name: string
  email: string
  avatar: string | null
  createdAt: Date
  updatedAt: Date
}

export class UserViewModel {
  static toHTTP(user: IUser): HTTPUser {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }
}
