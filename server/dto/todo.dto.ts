import { t } from "elysia";

export const todoDTO = t.Object({
	id: t.Number(),
	title: t.String(),
	description: t.String(),
	status: t.String(),
});
