import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateNestedOneWithoutRoutine_changesInputObjectSchema } from "./accountCreateNestedOneWithoutRoutine_changesInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateWithoutRoutineInput> = z
  .object({
    id: z.string().optional(),
    created_at: z.coerce.date().optional(),
    date: z.coerce.date(),
    description: z.string().optional().nullable(),
    account: z
      .lazy(() => accountCreateNestedOneWithoutRoutine_changesInputObjectSchema)
      .optional(),
  })
  .strict()

export const routine_changesCreateWithoutRoutineInputObjectSchema = Schema
