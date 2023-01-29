import { BadRequestException, Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { AUTH_SERVICE_TOKEN } from '@vsp/common';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
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
