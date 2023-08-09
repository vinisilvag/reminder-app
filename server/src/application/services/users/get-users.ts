import { type IUser, User } from '@application/models/user'

interface GetUsersResponse {
  users: IUser[]
}

export class GetUsers {
  public async execute(): Promise<GetUsersResponse> {
    const users = await User.find()

    return { users }
  }
}
