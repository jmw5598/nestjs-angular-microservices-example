import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account, RefreshToken, Role, User } from '@vsp/common';
import { CoreModule, TypeOrmConfigService } from '@vsp/core';

import { AccountsController } from './controllers/accounts.controller';
import { AuthController } from './controllers/auth.controller';
import { AccountsService } from './services/accounts.service';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    CoreModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [CoreModule.forRoot()],
      useClass: TypeOrmConfigService
    }),
    TypeOrmModule.forFeature([
      Account,
      RefreshToken,
      Role,
      User,
    ])
  ],
  controllers: [
    AccountsController,
    AuthController,
  ],
  providers: [
    AuthService, 
    AccountsService,
  ],
})
export class IdentityModule {}
