import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const pool = new Pool({
	connectionString: Bun.env.DATABASE_URL as string,
});

const db = drizzle(pool);

async function main() {
	console.log("🤖[Migration] Start");
	await migrate(db, {
		migrationsFolder: "server/db/migrations",
	});

	console.log("🤖[Migration] End");
	process.exit(0);
}

main().catch((err) => {
	console.error(err);
	process.exit(0);
});
