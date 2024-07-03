import { t } from 'elysia'

export const todoDTO = t.Object({
  id: t.Number(),
  title: t.String(),
  description: t.String(),
  status: t.String(),
})

export const todoCreateDTO = t.Object({
  title: t.String(),
  description: t.String(),
})

export const todoReqIdDTO = t.Object({
  id: t.Numeric(),
})

export const todoSearchQueryDTO = t.Optional(
  t.Object({
    title: t.Optional(t.String()),
    status: t.Optional(t.String()),
  }),
)
