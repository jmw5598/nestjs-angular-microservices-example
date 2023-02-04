import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserDetails } from '@vsp/common';
import { EnvironmentService } from '@vsp/core';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _environmentService: EnvironmentService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: _environmentService.get('IDENTITY_JWT_IGNORE_EXPIRATION') === 'true',
      secretOrKey: _environmentService.get('IDENTITY_JWT_SECRET'),
    });
  }

  public async validate(payload: any): Promise<UserDetails | null> {
    return { 
      id: payload.sub, 
      username: payload.username,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName
    } satisfies UserDetails;;
  }
}