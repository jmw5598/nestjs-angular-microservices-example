import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { EnvironmentService } from '@vsp/core';
import { loadEnvironmentVariables } from '@vsp/env';
import { CustomersModule } from './customers.module';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const environmentService: EnvironmentService = new EnvironmentService();
  const app = await NestFactory.createMicroservice(
    CustomersModule, {
      transport: Transport.TCP,
      options: {
        host: environmentService.get('CUSTOMERS_SERVICE_HOST') || 'localhost',
        port: environmentService.get('CUSTOMERS_SERVICE_PORT') || 3001
      }
    } as TcpOptions
  );
  await app.listen();
}
bootstrap();
