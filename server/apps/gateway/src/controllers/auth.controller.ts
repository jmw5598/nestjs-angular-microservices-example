import { BadRequestException, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { AUTH_SERVICE_TOKEN, refreshAccessTokenCommand, signInCommand } from '@vsp/common';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
    private readonly _authServiceClient: ClientProxy
  ) { }

  @Post('sign-in')
  public async signIn(): Promise<any> {
    try {
      return await this._authServiceClient.send(signInCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }

  @Post('refresh-access-token')
  public async refreshAccessToken(): Promise<any> {
    try {
      return await this._authServiceClient.send(refreshAccessTokenCommand, { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }
}
