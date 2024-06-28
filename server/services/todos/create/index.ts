import { db } from '../../../db/drizzle'
import { type NewTodo, todos } from '../../../db/drizzle/schema'

export default async function (todo: NewTodo) {
  const [res] = await db
    .insert(todos)
    .values(todo)
    .returning({
      id: todos.id,
      title: todos.title,
      description: todos.description,
      status: todos.status,
    })
    .execute()
  return res
}
