import { CreateAccountDto } from './create-account.dto';
import { CreateUserDto } from './create-user.dto';

export class RegistrationDto {
  public account: CreateAccountDto;
  public user: CreateUserDto;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
