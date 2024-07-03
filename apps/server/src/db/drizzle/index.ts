import config from '@/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: config.db.DATABASE_URL,
})

export const db = drizzle(pool, { logger: true })
