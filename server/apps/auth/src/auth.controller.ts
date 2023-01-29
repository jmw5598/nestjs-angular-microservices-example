import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly _authService: AuthService
  ) { }

  @MessagePattern('')
  public async getAuth(): Promise<any> {
    return this._authService.getUsers();
  }
}
