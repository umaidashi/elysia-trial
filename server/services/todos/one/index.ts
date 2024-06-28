import { eq } from "drizzle-orm";
import { db } from "../../../db/drizzle";
import { todos } from "../../../db/drizzle/schema";

export default async function (id: number) {
	return await db
		.select({
			id: todos.id,
			title: todos.title,
			description: todos.description,
			status: todos.status,
		})
		.from(todos)
		.where(eq(todos.id, id))
		.execute();
}
