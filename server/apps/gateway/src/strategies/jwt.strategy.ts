import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { EnvironmentService } from '@vsp/core';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly _environmentService: EnvironmentService
  ) {
    // @TODO read in environment variables to set stuff here.
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: _environmentService.get('IDENTITY_JWT_IGNORE_EXPIRATION'),
      secretOrKey: _environmentService.get('IDENTITY_JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    // @TODO
    return { userId: payload.sub, username: payload.username };
  }
}