import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

describe('CustomersController', () => {
  let customersController: CustomersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService],
    }).compile();

    customersController = app.get<CustomersController>(CustomersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customersController.getHello()).toBe('Hello World!');
    });
  });
});
