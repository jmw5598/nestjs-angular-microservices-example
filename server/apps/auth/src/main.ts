import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';

import { loadEnvironmentVariables } from '@vps/env';
import { EnvironmentService } from '@vps/core';

import { AuthModule } from './auth.module';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const environmentService: EnvironmentService = new EnvironmentService();
  const app = await NestFactory.createMicroservice(
    AuthModule, {
      trasport: Transport.TCP,
      options: {
        host: environmentService.get('AUTH_SERVICE_HOST') || 'localhost',
        port: environmentService.get('AUTH_SERVICE_PORT') || 3001
      }
    } as TcpOptions
  );
  await app.listen();
}
bootstrap();
