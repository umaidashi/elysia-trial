import type { Config } from 'drizzle-kit'

export default {
  schema: './server/db/drizzle/schema.ts',
  out: './server/db/migrations',
  dialect: 'postgresql',
} satisfies Config
