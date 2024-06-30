import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import config from '../../config'

const pool = new Pool({
  connectionString: config.db.DATABASE_URL,
})

export const db = drizzle(pool, { logger: true })
