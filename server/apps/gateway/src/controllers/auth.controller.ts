import { BadRequestException, Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectionTokens } from '@vps/core';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(InjectionTokens.AUTH_SERVICE_TOKEN)
    private readonly _authServiceClient: ClientProxy
  ) { }

  @Get()
  public async getAuth(): Promise<any> {
    try {
      return await this._authServiceClient.send('', { });
    } catch (error) {
      throw new BadRequestException("Bad Request!");
    }
  }
}
