import activate from "./activate";
import complete from "./complete";
import create from "./create";
import list from "./list";
import one from "./one";
import search from "./search";

export const todoServices = {
	list: list,
	one: one,
	search: search,
	create: create,
	activate: activate,
	complete: complete,
};
