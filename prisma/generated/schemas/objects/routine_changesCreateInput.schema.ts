import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateNestedOneWithoutRoutine_changesInputObjectSchema } from "./accountCreateNestedOneWithoutRoutine_changesInput.schema"
import { routineCreateNestedOneWithoutRoutine_changesInputObjectSchema } from "./routineCreateNestedOneWithoutRoutine_changesInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateInput> = z
  .object({
    id: z.string().optional(),
    created_at: z.coerce.date().optional(),
    date: z.coerce.date(),
    description: z.string().optional().nullable(),
    account: z
      .lazy(() => accountCreateNestedOneWithoutRoutine_changesInputObjectSchema)
      .optional(),
    routine: z.lazy(
      () => routineCreateNestedOneWithoutRoutine_changesInputObjectSchema
    ),
  })
  .strict()

export const routine_changesCreateInputObjectSchema = Schema
