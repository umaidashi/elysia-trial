import data from '../../package.json'

const isTestEnvironment = Bun.env.NODE_ENV === 'test'

export default {
  app: {
    env: Bun.env.NODE_ENV,
    name: data.name,
    version: data.version,
    host: Bun.env.TEST_APP_HOST || Bun.env.APP_HOST || 'localhost',
    server_port:
      (isTestEnvironment ? Bun.env.TEST_SERVER_PORT : Bun.env.SERVER_PORT) ||
      '8080',
  },
  db: {
    DATABASE_URL:
      Bun.env.DATABASE_URL ??
      'postgres://postgres:postgres@localhost:5432/postgres',
  },
}
