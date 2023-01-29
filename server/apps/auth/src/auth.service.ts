import { Injectable } from '@nestjs/common';
import { User } from '@vsp/common';

import { UsersRepository } from './repositories/users-repository.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly _usersRepository: UsersRepository
  ) { }

  public async getUsers(): Promise<User[]> {
    return await this._usersRepository.find();
  }
}
