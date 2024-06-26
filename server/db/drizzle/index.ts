import type { Logger } from "drizzle-orm/logger";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
	connectionString: Bun.env.DATABASE_URL as string,
});

export const db = drizzle(pool, { logger: true });
