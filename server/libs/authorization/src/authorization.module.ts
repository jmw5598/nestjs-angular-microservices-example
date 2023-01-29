import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Module({
  providers: [
    JwtAuthGuard,
    LocalAuthGuard
  ],
  exports: [
    JwtAuthGuard,
    LocalAuthGuard
  ],
})
export class AuthorizationModule {}
