import { Elysia, t } from 'elysia'
import type { NewTodo } from '../db/drizzle/schema'
import {
  todoCreateDTO,
  todoDTO,
  todoReqIdDTO,
  todoSearchQueryDTO,
} from '../dto/todo.dto'
import { TODO_STATUS } from '../model/todo.model'
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
        params: todoReqIdDTO,
        response: {
          200: todoDTO,
        },
      },
    )
    .get(
      '/search',
      async ({ query }) => {
        const res = await todoServices.search({
          title: query.title,
          status: query.status,
        })
        return res
      },
      {
        detail: {
          description: 'Search for todos',
          tags: ['Todos'],
        },
        query: todoSearchQueryDTO,
        response: {
          200: t.Array(todoDTO),
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
        params: todoReqIdDTO,
        response: {
          200: todoDTO,
        },
      },
    )
    .post(
      '/:id/complete',
      async ({ params }) => {
        const { id } = params
        const res = await todoServices.complete(Number(id))
        return res
      },
      {
        detail: {
          description: 'Mark a todo as Complete',
          tags: ['Todos'],
        },
        params: todoReqIdDTO,
        response: {
          200: todoDTO,
        },
      },
    ),
)
