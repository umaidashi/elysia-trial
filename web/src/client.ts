import { treaty } from '@elysiajs/eden'
import type { App } from '../../server/index'

export const client = treaty<App>('http://localhost:8080')
