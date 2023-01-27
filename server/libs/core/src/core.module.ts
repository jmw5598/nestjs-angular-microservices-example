import { DynamicModule, Module } from '@nestjs/common';
import { EnvironmentService } from './services/environment.service';

@Module({
  providers: [],
  exports: [],
})
export class CoreModule {
  public static forRoot(): DynamicModule {
    return {
      module: CoreModule,
      providers: [
        EnvironmentService
      ],
      exports: [
        EnvironmentService
      ]
    } as DynamicModule
  }
}
