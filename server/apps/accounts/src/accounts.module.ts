import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account, RefreshToken, Role, User } from '@vsp/common';

import { CoreModule, TypeOrmConfigService } from '@vsp/core';

import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [
    CoreModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [CoreModule.forRoot()],
      useClass: TypeOrmConfigService
    }),
    TypeOrmModule.forFeature([
      Account,
      User,
      Role,
      RefreshToken,
    ])
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
