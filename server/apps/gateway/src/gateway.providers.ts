import { ClientProxyFactory, TcpClientOptions, Transport } from '@nestjs/microservices';

import { EnvironmentService, InjectionTokens } from '@vps/core';

export const authMicroserviceProvider = {
  provide: InjectionTokens.AUTH_SERVICE_TOKEN,
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
