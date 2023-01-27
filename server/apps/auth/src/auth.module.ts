import { Module } from '@nestjs/common';
import { CoreModule } from '@vps/core';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    CoreModule.forRoot()
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule {}
