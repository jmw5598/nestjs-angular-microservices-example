import { ClientProxyFactory, TcpClientOptions, Transport } from '@nestjs/microservices';

import { ACCOUNTS_SERVICE_TOKEN, AUTH_SERVICE_TOKEN } from '@vsp/common';
import { EnvironmentService } from '@vsp/core';

export const accountsMicroserviceProvider = {
  provide: ACCOUNTS_SERVICE_TOKEN,
  useFactory: (environmentService: EnvironmentService) => {
    return ClientProxyFactory.create({
      options: {
        port: environmentService.get('ACCOUNTS_SERVICE_PORT'),
        host: environmentService.get('ACCOUNTS_SERVICE_HOST'),
      },
      transport: Transport.TCP,
    } as TcpClientOptions);
  },
  inject: [EnvironmentService]
};

export const authMicroserviceProvider = {
  provide: AUTH_SERVICE_TOKEN,
  useFactory: (environmentService: EnvironmentService) => {
    return ClientProxyFactory.create({
      options: {
        port: environmentService.get('AUTH_SERVICE_PORT'),
        host: environmentService.get('AUTH_SERVICE_HOST'),
      },
      transport: Transport.TCP,
    } as TcpClientOptions);
  },
  inject: [EnvironmentService]
};
