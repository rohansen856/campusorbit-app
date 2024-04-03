import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const routineSchema = z.object({
  id: z.string(),
  type: z.string(),
  code: z.string(),
  prof: z.string(),
  from: z.number(),
  to: z.number(),
  day: z.number(),
  sem: z.number(),
  branch: z.string(),
  room: z.string(),
  group: z.string(),
})
// export const taskSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   status: z.string(),
//   label: z.string(),
//   priority: z.string(),
// })

export type Routine = z.infer<typeof routineSchema>
// export type Task = z.infer<typeof taskSchema>
