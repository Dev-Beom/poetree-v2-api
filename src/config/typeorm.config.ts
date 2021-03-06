import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.RDS_ENDPOINT,
  port: 3306,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  entities: [__dirname + '/**/*.entity.ts'],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: true,
  logging: true,
  keepConnectionAlive: true,
};