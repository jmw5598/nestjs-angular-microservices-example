import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { findAllCustomersCommand } from '@vsp/common';
import { CustomersService } from './customers.service';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @MessagePattern(findAllCustomersCommand)
  public async findAllPayments(): Promise<any[]> {
    return [];
  }
}
