import { Inject, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PassportStrategy } from '@nestjs/passport';
import { firstValueFrom } from 'rxjs';
import { Strategy } from 'passport-local';

import { LoggerService } from '@vsp/logger';
import { Credentials, IDENTITY_SERVICE_TOKEN, UserDetails, validateUserCommand } from '@vsp/common';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly _logger: LoggerService,
    @Inject(IDENTITY_SERVICE_TOKEN)
    private readonly _identityServiceClient: ClientProxy
  ) {
    /*
      @Note
      You can pass options to super to customerize passports local strategy such
      as the username and password fields expected on the request body.
      
      http://www.passportjs.org/concepts/authentication/strategies/
      
      Ex: super({ usernameField: 'email' })
    */
    super({ passReqToCallback: true });
    this._logger.setContext(LocalStrategy.name);
  }

  public async validate(request: Request): Promise<UserDetails> {
    try {
      const { username, password, clientId } = request.body;
      const user = await firstValueFrom(
        this._identityServiceClient
          .send(validateUserCommand,new Credentials({ username, password, clientId }))
      );

      if (!user) {
        throw new UnauthorizedException("Invalid username/password");
      }

      return user;
    } catch (error) {
      this._logger.error('Error validating username and password', error);
      throw error;
    }
  }
}
