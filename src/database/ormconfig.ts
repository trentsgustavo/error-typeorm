import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const DatabaseOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: false,
  migrations: [__dirname + 'database/migrations/*.ts'],
  // options: { encrypt: false, trustServerCertificate: true },
};

const dataSource = new DataSource(DatabaseOptions);

export default dataSource;
