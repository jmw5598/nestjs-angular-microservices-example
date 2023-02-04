import { CreateAddressDto } from './create-address.dto';

export class CreateProfileDto {
  public firstName: string;
  public lastName: string;
  public summary: string;
  public avatarUrl: string;
  public address: CreateAddressDto;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
