import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { EnvironmentService } from '@vsp/core';
import { loadEnvironmentVariables } from '@vsp/env';
import { PaymentsModule } from './payments.module';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const environmentService: EnvironmentService = new EnvironmentService();
  const app = await NestFactory.createMicroservice(
    PaymentsModule, {
      transport: Transport.TCP,
      options: {
        host: environmentService.get('PAYMENTS_SERVICE_HOST') || 'localhost',
        port: environmentService.get('PAYMENTS_SERVICE_PORT') || 3001
      }
    } as TcpOptions
  );
  await app.listen();
}
bootstrap();
