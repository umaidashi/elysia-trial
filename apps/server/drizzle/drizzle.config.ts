import type { Config } from 'drizzle-kit'
import config from '../src/config'

export default {
  schema: './src/db/drizzle/schema.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: config.db.DATABASE_URL,
  },
} satisfies Config
