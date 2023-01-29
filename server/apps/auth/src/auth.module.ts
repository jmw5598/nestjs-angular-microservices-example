import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule, TypeOrmConfigService } from '@vsp/core';
import { RefreshToken, Role, User } from '@vsp/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { UsersRepository } from './repositories/users-repository.service';

@Module({
  imports: [
    CoreModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [CoreModule.forRoot()],
      useClass: TypeOrmConfigService
    }),
    TypeOrmModule.forFeature([
      RefreshToken,
      Role,
      User,
    ])
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    UsersRepository
  ],
})
export class AuthModule {}
