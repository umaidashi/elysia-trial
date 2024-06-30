import { treaty } from '@elysiajs/eden'
import type { App } from '../../server/index'

const client = treaty<App>('http://localhost:3000')
