import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account, RefreshToken, Role, User } from '@vsp/common';
import { Address } from '@vsp/common/entities/identity/address.entity';
import { Claim } from '@vsp/common/entities/identity/claim.entity';
import { DeviceCode } from '@vsp/common/entities/identity/device-code.entity';
import { Profile } from '@vsp/common/entities/identity/profile.entity';
import { Tenant } from '@vsp/common/entities/identity/tenant.entity';
import { CoreModule, TypeOrmConfigService } from '@vsp/core';

import { AccountsController } from './controllers/accounts.controller';
import { AuthController } from './controllers/auth.controller';
import { UsersRepository } from './repositories/users-repository.service';
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
      Address,
      Claim,
      DeviceCode,
      Profile,
      RefreshToken,
      Role,
      Tenant,
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
    UsersRepository
  ],
})
export class IdentityModule {}
