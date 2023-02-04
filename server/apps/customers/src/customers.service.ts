import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  getHello(): string {
    return 'Hello World!';
  }
}
