import { treaty } from '@elysiajs/eden'
import type { ElysiaApp } from 'server'

export const eden = treaty<ElysiaApp>('http://localhost:8080')
