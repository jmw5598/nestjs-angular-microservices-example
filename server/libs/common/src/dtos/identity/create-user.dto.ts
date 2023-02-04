import { CreateProfileDto } from './create-profile.dto';

export class CreateUserDto {
  public username: string;
  public password: string;
  public confirmPassword: string;
  public email: string;
  public profile: CreateProfileDto;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
