import data from '../../package.json'

const isTestEnvironment = import.meta.env.NODE_ENV === 'test'

export default {
  app: {
    env: import.meta.env.NODE_ENV,
    name: data.name,
    version: data.version,
    host:
      import.meta.env.TEST_APP_HOST || import.meta.env.APP_HOST || 'localhost',
    server_port:
      (isTestEnvironment
        ? import.meta.env.TEST_SERVER_PORT
        : import.meta.env.SERVER_PORT) || '8080',
  },
  db: {
    DATABASE_URL:
      import.meta.env.DATABASE_URL ??
      'postgres://postgres:postgres@localhost:5432/postgres',
  },
}
