import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { EnvironmentService } from '@vsp/core';
import { loadEnvironmentVariables } from '@vsp/env';
import { IdentityModule } from './identity.module';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const environmentService: EnvironmentService = new EnvironmentService();
  const app = await NestFactory.createMicroservice(
    IdentityModule, {
      transport: Transport.TCP,
      options: {
        host: environmentService.get('IDENTITY_SERVICE_HOST') || 'localhost',
        port: environmentService.get('IDENTITY_SERVICE_PORT') || 3001
      }
    } as TcpOptions
  );
  await app.listen();
}
bootstrap();
