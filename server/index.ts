import config from '@/config'
import loggerPlugin from '@/plugins/logger'
import routes from '@/routes'
import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'

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
  .listen(config.app.server_port)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)

export type App = typeof app
