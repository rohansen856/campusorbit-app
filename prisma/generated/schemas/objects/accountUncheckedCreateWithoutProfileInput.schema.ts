import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from "./routine_changesUncheckedCreateNestedManyWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.accountUncheckedCreateWithoutProfileInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    institute: z.string(),
    created_at: z.coerce.date().optional(),
    access_level: z.number().optional(),
    password: z.string().optional().nullable(),
    routine_changes: z
      .lazy(
        () =>
          routine_changesUncheckedCreateNestedManyWithoutAccountInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const accountUncheckedCreateWithoutProfileInputObjectSchema = Schema
