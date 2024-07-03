import data from '../../package.json'

const isTestEnvironment = process.env.NODE_ENV === 'test'

export default {
  app: {
    env: process.env.NODE_ENV,
    name: data.name,
    version: data.version,
    host: process.env.TEST_APP_HOST || process.env.APP_HOST || 'localhost',
    server_port:
      (isTestEnvironment
        ? process.env.TEST_SERVER_PORT
        : process.env.SERVER_PORT) || '8080',
  },
  db: {
    DATABASE_URL:
      process.env.DATABASE_URL ??
      'postgres://postgres:postgres@localhost:5432/postgres',
  },
}
