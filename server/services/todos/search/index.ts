import { and, desc, like } from "drizzle-orm";
import { db } from "../../../db/drizzle";
import { todos } from "../../../db/drizzle/schema";

type TodoSearchQueryConditions = {
	title?: string;
	status?: string;
};

export default async function (query: TodoSearchQueryConditions) {
	const res = await db
		.select()
		.from(todos)
		.where(
			and(
				like(todos.title, `%${query.title ?? ""}%`),
				like(todos.status, `%${query.status ?? ""}%`),
			),
		)
		.orderBy(desc(todos.id))
		.execute();

	return res;
}
