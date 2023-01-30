import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { refreshAccessTokenCommand, signInCommand } from '@vsp/common';
import { AccountsService } from '../services/accounts.service';

import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly _authService: AuthService,
    private readonly _accountsService: AccountsService,
  ) { }

  @MessagePattern(signInCommand)
  public async signIn(): Promise<any> {
    return this._accountsService.findAll();
  }

  @MessagePattern(refreshAccessTokenCommand)
  public async refreshAccessToken(): Promise<any> {
    return 'Refreshing Access Token'
  }
}
