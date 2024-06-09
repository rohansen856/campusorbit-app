import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.routine_changesCreateManyRoutineInput> = z
  .object({
    id: z.string().optional(),
    created_at: z.coerce.date().optional(),
    created_by: z.string().optional(),
    date: z.coerce.date(),
    description: z.string().optional().nullable(),
  })
  .strict()

export const routine_changesCreateManyRoutineInputObjectSchema = Schema
