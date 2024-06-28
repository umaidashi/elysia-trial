import { Elysia, t } from 'elysia'
import type { NewTodo } from '../db/drizzle/schema'
import { todoCreateDTO, todoDTO } from '../dto/todo.dto'
import { todoServices } from '../services/todos'

export default new Elysia({ name: 'todo' }).group('/todos', app =>
  app
    .get('/', async () => await todoServices.list(), {
      detail: {
        description: 'List all todos',
        tags: ['Todos'],
      },
      response: {
        200: t.Array(todoDTO),
      },
    })
    .get(
      '/:id',
      async ({ params }) => {
        const { id } = params
        const res = await todoServices.one(Number(id))
        return res
      },
      {
        detail: {
          description: 'Get a todo by id',
          tags: ['Todos'],
        },
        params: t.Object({
          id: t.Number(),
        }),
        response: {
          200: todoDTO,
        },
      },
    )
    .post(
      '/',
      async ({ body }) => {
        const newTodo: NewTodo = { ...body, status: TODO_STATUS.PENDING }
        const res = await todoServices.create(newTodo)
        return res
      },
      {
        detail: {
          description: 'Create a new todo',
          tags: ['Todos'],
        },
        body: todoCreateDTO,
        response: {
          201: todoDTO,
        },
      },
    )
    .post(
      '/:id/active',
      async ({ params }) => {
        const { id } = params
        const res = await todoServices.activate(Number(id))
        return res
      },
      {
        detail: {
          description: 'Mark a todo as Active',
          tags: ['Todos'],
        },
        params: t.Object({
          id: t.Number(),
        }),
      },
    ),
)
