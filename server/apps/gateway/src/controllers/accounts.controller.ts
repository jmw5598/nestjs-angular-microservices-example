import { BadRequestException, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { 
  ACCOUNTS_SERVICE_TOKEN, 
  confirmEmailCommand, 
  forgotPasswordCommand, 
  registerAccountCommand, 
  resetPasswordCommand } from '@vsp/common';

@Controller('accounts')
export class AccountsController {
  constructor(
    @Inject(ACCOUNTS_SERVICE_TOKEN)
    private readonly _accountsServiceClient: ClientProxy
  ) { }

  @Post('register')
  public async registerAccount(): Promise<any> {
    try {
      return await this._accountsServiceClient.send(registerAccountCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }

  @Post('forgot-password')
  public async forgotPassword(): Promise<any> {
    try {
      return await this._accountsServiceClient.send(forgotPasswordCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }

  @Post('reset-password')
  public async resetPassword(): Promise<any> {
    try {
      return await this._accountsServiceClient.send(resetPasswordCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }

  @Post('confirm-email')
  public async confirmEmail(): Promise<any> {
    try {
      return await this._accountsServiceClient.send(confirmEmailCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }
}
