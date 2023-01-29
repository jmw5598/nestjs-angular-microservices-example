import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { refreshAccessTokenCommand, signInCommand } from '@vsp/common';

import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly _authService: AuthService
  ) { }

  @MessagePattern(signInCommand)
  public async signIn(): Promise<any> {
    return 'Signing In User'
  }

  @MessagePattern(refreshAccessTokenCommand)
  public async refreshAccessToken(): Promise<any> {
    return 'Refreshing Access Token'
  }
}
