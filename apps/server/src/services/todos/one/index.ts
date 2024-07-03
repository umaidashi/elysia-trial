import { db } from '@/db/drizzle'
import { todos } from '@/db/drizzle/schema'
import { eq } from 'drizzle-orm'

export default async function (id: number) {
  const [res] = await db
    .select({
      id: todos.id,
      title: todos.title,
      description: todos.description,
      status: todos.status,
    })
    .from(todos)
    .where(eq(todos.id, id))
    .execute()

  if (!res) {
    throw new Error('Todo not found')
  }

  return res
}
