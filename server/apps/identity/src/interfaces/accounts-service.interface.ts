import { RegistrationDto, UserDto } from '@vsp/common';

export const ACCOUNTSS_SERVICE_TOKEN: string = 'ACCOUNTS_SERVICE_TOKEN';

export interface IAccountsService {
  register(registration: RegistrationDto): Promise<UserDto | null>
}
