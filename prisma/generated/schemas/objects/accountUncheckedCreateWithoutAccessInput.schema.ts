import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileUncheckedCreateNestedOneWithoutAccountInputObjectSchema } from "./profileUncheckedCreateNestedOneWithoutAccountInput.schema"
import { routine_changesUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from "./routine_changesUncheckedCreateNestedManyWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.accountUncheckedCreateWithoutAccessInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    institute: z.string(),
    created_at: z.coerce.date().optional(),
    password: z.string().optional().nullable(),
    profile: z
      .lazy(
        () => profileUncheckedCreateNestedOneWithoutAccountInputObjectSchema
      )
      .optional(),
    routine_changes: z
      .lazy(
        () =>
          routine_changesUncheckedCreateNestedManyWithoutAccountInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const accountUncheckedCreateWithoutAccessInputObjectSchema = Schema
