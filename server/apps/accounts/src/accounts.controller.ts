import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { 
  confirmEmailCommand, 
  forgotPasswordCommand, 
  registerAccountCommand, 
  resetPasswordCommand } from '@vsp/common';

import { AccountsService } from './accounts.service';

@Controller()
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @MessagePattern(registerAccountCommand)
  public async registerAccount(): Promise<string> {
    return 'Registering Accounts';
  }

  @MessagePattern(forgotPasswordCommand)
  public async forgotPassword(): Promise<string> {
    return 'Forgot Password';
  }

  @MessagePattern(resetPasswordCommand)
  public async resetPassword(): Promise<string> {
    return 'Reset Password';
  }

  @MessagePattern(confirmEmailCommand)
  public async confirmEmail(): Promise<string> {
    return 'Confirm Email';
  }
}
