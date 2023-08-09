import { type IUser, User } from '@application/models/user'

import { UserNotFound } from '@application/errors/user-not-found'

interface GetProfileRequest {
  userId: string
}

interface GetProfileResponse {
  user: IUser
}

export class GetProfile {
  public async execute(
    request: GetProfileRequest
  ): Promise<GetProfileResponse> {
    const { userId } = request

    const user = await User.findById(userId)

    if (!user) {
      throw new UserNotFound()
    }

    return { user }
  }
}
