import { db } from ".";
import { todos } from "./schema";

async function main() {
	console.log("🤖[Seed] Start");
	await db
		.insert(todos)
		.values({
			title: "Learn Drizzle",
			description: "Learn how to use Drizzle ORM",
			status: "TODO",
		})
		.execute();
	console.log("🤖[Seed] End");
	process.exit(0);
}

main().catch((err) => {
	console.error(err);
	process.exit(0);
});
