import { Module } from '@nestjs/common';

import { CoreModule } from '@vps/core';

import { authMicroserviceProvider } from './gateway.providers';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    CoreModule.forRoot()
  ],
  controllers: [
    AuthController
  ],
  providers: [
    authMicroserviceProvider
  ],
})
export class GatewayModule {}
