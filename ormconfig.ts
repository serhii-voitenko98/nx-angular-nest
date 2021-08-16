export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    'dist/apps/backend/api/src/**/*.entity.js', // where to find entities files after running backend:api:entities script
  ],
  migrations: [
    'dist/apps/backend/api/src/migrations/*.js', // where to find migrations files after running backend:api:migrations:run script
  ],
  cli: {
    'migrationsDir': 'apps/backend/api/src/migrations', // where to put files after running backend:api:migration:create script
  },
};
