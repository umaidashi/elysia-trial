import { Elysia, t } from 'elysia'
import { todoDTO } from '../dto/todo.dto'
import { todoServices } from '../services/todos'

export default new Elysia({ name: 'todo' }).group('/todos', app =>
  app.get('/', async () => await todoServices.list(), {
    detail: {
      description: 'List all todos',
      tags: ['Todos'],
    },
    response: {
      200: t.Array(todoDTO),
    },
  }),
)
