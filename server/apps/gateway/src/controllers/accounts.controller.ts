import { BadRequestException, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { 
  confirmEmailCommand, 
  forgotPasswordCommand, 
  IDENTITY_SERVICE_TOKEN, 
  registerAccountCommand, 
  resetPasswordCommand } from '@vsp/common';

@Controller('accounts')
export class AccountsController {
  constructor(
    @Inject(IDENTITY_SERVICE_TOKEN)
    private readonly _identityServiceClient: ClientProxy
  ) { }

  @Post('register')
  public async registerAccount(): Promise<any> {
    try {
      return await this._identityServiceClient.send(registerAccountCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }

  @Post('forgot-password')
  public async forgotPassword(): Promise<any> {
    try {
      return await this._identityServiceClient.send(forgotPasswordCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }

  @Post('reset-password')
  public async resetPassword(): Promise<any> {
    try {
      return await this._identityServiceClient.send(resetPasswordCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }

  @Post('confirm-email')
  public async confirmEmail(): Promise<any> {
    try {
      return await this._identityServiceClient.send(confirmEmailCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }
}
