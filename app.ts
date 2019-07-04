import { createConnection } from 'typeorm';
import { Foo } from './Foo';
import { Bar } from './Bar';

if (!process.env.DB_NAME) {
  throw new Error('DB_NAME is not set');
}
if (!process.env.DB_HOST) {
  throw new Error('DB_HOST is not set');
}

if (!process.env.DB_USERNAME) {
  throw new Error('DB_USERNAME is not set');
}
if (!process.env.DB_PASSWORD) {
  throw new Error('DB_PASSWORD is not set');
}

(async function main() {
  await createConnection({
    database: process.env.DB_NAME,
    type: 'mssql',
    host: process.env.DB_HOST,
    port: 1433,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    // debug: true,
    logging: true,
    entities: [Foo, Bar],
  });
})();
