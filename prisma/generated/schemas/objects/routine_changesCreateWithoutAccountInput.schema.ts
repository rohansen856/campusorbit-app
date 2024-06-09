import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateNestedOneWithoutRoutine_changesInputObjectSchema } from "./routineCreateNestedOneWithoutRoutine_changesInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateWithoutAccountInput> = z
  .object({
    id: z.string().optional(),
    created_at: z.coerce.date().optional(),
    date: z.coerce.date(),
    description: z.string().optional().nullable(),
    routine: z.lazy(
      () => routineCreateNestedOneWithoutRoutine_changesInputObjectSchema
    ),
  })
  .strict()

export const routine_changesCreateWithoutAccountInputObjectSchema = Schema
