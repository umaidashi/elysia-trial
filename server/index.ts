import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import config from './config'
import loggerPlugin from './plugins/logger'
import routes from './routes'

const app = new Elysia()
  .use(
    swagger({
      path: '/',
      documentation: {
        info: {
          title: config.app.name,
          version: config.app.version,
        },
      },
    }),
  )
  .use(loggerPlugin)
  .use(routes)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
