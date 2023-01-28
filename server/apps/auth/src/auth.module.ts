import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule, TypeOrmConfigService } from '@vps/core';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    CoreModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [CoreModule.forRoot()],
      useClass: TypeOrmConfigService
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule {}
