import { NestFactory } from '@nestjs/core';
import { TcpClientOptions, Transport } from '@nestjs/microservices';

import { EnvironmentService } from '@vsp/core';
import { loadEnvironmentVariables } from '@vsp/env';

import { AccountsModule } from './accounts.module';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const environmentService: EnvironmentService = new EnvironmentService();
  const app = await NestFactory.createMicroservice(
    AccountsModule, {
      transport: Transport.TCP,
      options: {
        host: environmentService.get('ACCOUNTS_SERVICE_HOST') || 'localhost',
        port: environmentService.get('ACCOUNTS_SERVICE_PORT') || 3002
      }     
    } as TcpClientOptions
  );
  await app.listen();
}
bootstrap();
