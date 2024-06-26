import { Elysia } from "elysia";
import todoRoutes from "./todo.routes";

const route = new Elysia().use(todoRoutes);

export default route;
