import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { findAllPaymentsCommand } from '@vsp/common';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern(findAllPaymentsCommand)
  public async findAllPayments(): Promise<any[]> {
    return [];
  }
}
