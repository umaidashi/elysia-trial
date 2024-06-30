import type { Config } from 'drizzle-kit'
import config from '../server/config'

export default {
  schema: './server/db/drizzle/schema.ts',
  out: './server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: config.db.DATABASE_URL,
  },
} satisfies Config
