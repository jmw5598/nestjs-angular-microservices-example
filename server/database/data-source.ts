import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { loadEnvironmentVariables } from '../environments';

// Load env variables.
loadEnvironmentVariables('./environments');

export default new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USER,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  logging: process.env.TYPEORM_LOGGING,
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ["./database/migrations/*.ts"],
  subscribers: [],
  entities: ["./libs/common/src/entities/*.entity.ts"]
} as DataSourceOptions);
