import { ClientProxyFactory, TcpClientOptions, Transport } from '@nestjs/microservices';

import { IDENTITY_SERVICE_TOKEN } from '@vsp/common';
import { EnvironmentService } from '@vsp/core';

export const identityMicroserviceProvider = {
  provide: IDENTITY_SERVICE_TOKEN,
  useFactory: (environmentService: EnvironmentService) => {
    return ClientProxyFactory.create({
      options: {
        port: environmentService.get('IDENTITY_SERVICE_PORT'),
        host: environmentService.get('IDENTITY_SERVICE_HOST'),
      },
      transport: Transport.TCP,
    } as TcpClientOptions);
  },
  inject: [EnvironmentService]
};
