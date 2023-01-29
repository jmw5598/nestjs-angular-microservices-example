import { Module } from '@nestjs/common';

import { CoreModule } from '@vsp/core';

import { identityMicroserviceProvider } from './gateway.providers';
import { AuthController } from './controllers/auth.controller';
import { AccountsController } from './controllers/accounts.controller';

@Module({
  imports: [
    CoreModule.forRoot()
  ],
  controllers: [
    AuthController,
    AccountsController
  ],
  providers: [
    identityMicroserviceProvider,
  ],
})
export class GatewayModule {}
