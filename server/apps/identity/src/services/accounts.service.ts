import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users-repository.service';

@Injectable()
export class AccountsService {
  constructor(
    private _usersRepository: UsersRepository
  ) { }

  public async findAll(): Promise<any> {
    return this._usersRepository.find();
  }
}
