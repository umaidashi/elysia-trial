import { eq } from 'drizzle-orm'
import { db } from '../../../db/drizzle'
import { todos } from '../../../db/drizzle/schema'
import { TODO_STATUS } from '../../../model/todo.model'

export default async function (id: number) {
  const [todo] = await db.select().from(todos).where(eq(todos.id, id)).execute()

  if (!todo) {
    throw new Error('Todo not found')
  }

  const [res] = await db
    .update(todos)
    .set({ status: TODO_STATUS.COMPLETED })
    .where(eq(todos.id, id))
    .returning({
      id: todos.id,
      title: todos.title,
      description: todos.description,
      status: todos.status,
    })
    .execute()
  return res
}
