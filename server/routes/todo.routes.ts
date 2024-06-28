import { Elysia, t } from "elysia";
import type { NewTodo } from "../db/drizzle/schema";
import { todoCreateDTO, todoDTO } from "../dto/todo.dto";
import { todoServices } from "../services/todos";

export default new Elysia({ name: "todo" }).group("/todos", (app) =>
	app
		.get("/", async () => await todoServices.list(), {
			detail: {
				description: "List all todos",
				tags: ["Todos"],
			},
			response: {
				200: t.Array(todoDTO),
			},
		})
		.post(
			"/",
			async ({ body }) => {
				const newTodo: NewTodo = { ...body, status: "pending" };
				const [res] = await todoServices.create(newTodo);
				return res;
			},
			{
				detail: {
					description: "Create a new todo",
					tags: ["Todos"],
				},
				body: todoCreateDTO,
				response: {
					201: todoDTO,
				},
			},
		),
);
