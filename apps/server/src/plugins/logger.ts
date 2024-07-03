import type Elysia from 'elysia'
import * as yc from 'yoctocolors'

export default (app: Elysia) =>
  app
    .state({ startTime: process.hrtime.bigint(), as: 'global' })
    .onRequest(ctx => {
      ctx.store.startTime = process.hrtime.bigint()
    })
    .onBeforeHandle({ as: 'global' }, ({ request, store }) => {
      store.startTime = process.hrtime.bigint()

      const logStr: string[] = []

      logStr.push(yc.gray(new Date().toLocaleString('ja-JP')))
      logStr.push(methodString(request.method))
      logStr.push(new URL(request.url).pathname)
      logStr.push(yc.yellow('Started'))

      console.log(logStr.join(' '))
    })
    .onAfterHandle({ as: 'global' }, ({ request, store }) => {
      const logStr: string[] = []

      logStr.push(yc.gray(new Date().toLocaleString('ja-JP')))
      logStr.push(methodString(request.method))
      logStr.push(new URL(request.url).pathname)
      logStr.push(yc.green('Completed'))

      const startTime: bigint = store.startTime

      logStr.push(durationString(startTime))

      console.log(logStr.join(' '))
    })
    .onError({ as: 'global' }, ({ request, error, store }) => {
      const logStr: string[] = []

      logStr.push(yc.gray(new Date().toLocaleString('ja-JP')))
      logStr.push(yc.red(methodString(request.method)))
      logStr.push(new URL(request.url).pathname)
      logStr.push(yc.red('Error'))

      if ('status' in error) {
        logStr.push(String(error.status))
      }

      logStr.push(error.message)

      const startTime: bigint = store.startTime
      logStr.push(durationString(startTime))

      console.log(logStr.join(' '))
    })

export function durationString(startTime: bigint): string {
  const now = process.hrtime.bigint()
  const timeDifference = now - startTime
  const nanoseconds = Number(timeDifference)

  let timeMessage = ''

  if (nanoseconds >= 1e9) {
    const seconds = (nanoseconds / 1e9).toFixed(2)
    timeMessage = `| ${seconds}s`
  } else if (nanoseconds >= 1e6) {
    const durationInMilliseconds = (nanoseconds / 1e6).toFixed(0)

    timeMessage = `| ${durationInMilliseconds}ms`
  } else if (nanoseconds >= 1e3) {
    const durationInMicroseconds = (nanoseconds / 1e3).toFixed(0)

    timeMessage = `| ${durationInMicroseconds}µs`
  } else {
    timeMessage = `| ${nanoseconds}ns`
  }

  return timeMessage
}

export function methodString(method: string): string {
  switch (method) {
    case 'GET':
      return yc.bgWhite(' GET ')

    case 'POST':
      return yc.bgYellow('POST')

    case 'PUT':
      return yc.bgBlue('PUT')

    case 'DELETE':
      return yc.bgRed('DELETE')

    case 'PATCH':
      return yc.bgGreen('PATCH')

    case 'OPTIONS':
      return yc.bgGray('OPTIONS')

    case 'HEAD':
      return yc.bgMagenta('HEAD')

    default:
      return method
  }
}
