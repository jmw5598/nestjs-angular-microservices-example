import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
