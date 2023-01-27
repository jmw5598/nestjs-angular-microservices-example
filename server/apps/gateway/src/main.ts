import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { loadEnvironmentVariables } from '@vps/env';
import { EnvironmentService } from '@vps/core';

import { GatewayModule } from './gateway.module';

// Load env file from NODE_ENV
loadEnvironmentVariables('./environments');

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  
  const options = new DocumentBuilder()
    .setTitle('API Docs')
    .addTag('auth')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(new EnvironmentService().get('API_GATEWAY_PORT'));
}

bootstrap();
