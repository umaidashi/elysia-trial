import type { Config } from 'drizzle-kit'

export default {
  schema: './server/db/drizzle/schema.ts',
  out: './server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: Bun.env.DATABASE_URL as string,
  },
} satisfies Config
