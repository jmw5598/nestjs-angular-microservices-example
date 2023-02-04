import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthorizationModule } from '@vsp/authorization';
import { CoreModule } from '@vsp/core';
import { LoggerModule } from '@vsp/logger';

import { AuthController } from './controllers/auth.controller';
import { AccountsController } from './controllers/accounts.controller';
import { identityMicroserviceProvider } from './gateway.providers';
import { LocalStrategy } from './strategies/local.strategy';

import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [
    CoreModule.forRoot(),
    AuthorizationModule,
    LoggerModule,
    PassportModule,
  ],
  controllers: [
    AuthController,
    AccountsController
  ],
  providers: [
    identityMicroserviceProvider,
    JwtStrategy,
    LocalStrategy,
  ],
})
export class GatewayModule {}
