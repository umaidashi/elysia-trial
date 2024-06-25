import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 50 }).notNull(),
	description: text("description").notNull(),
	status: varchar("status", { length: 30 }).notNull(),
});

export type Todo = typeof todos.$inferSelect;
export type NewTodo = typeof todos.$inferInsert;
