import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import loggerPlugin from './plugins/logger'
import routes from './routes'

const app = new Elysia()
  .use(
    swagger({
      path: '/',
    }),
  )
  .use(loggerPlugin)
  .use(routes)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
