import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileUncheckedCreateNestedOneWithoutAccountInputObjectSchema } from "./profileUncheckedCreateNestedOneWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.accountUncheckedCreateWithoutRoutine_changesInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      institute: z.string(),
      created_at: z.coerce.date().optional(),
      access_level: z.number().optional(),
      password: z.string().optional().nullable(),
      profile: z
        .lazy(
          () => profileUncheckedCreateNestedOneWithoutAccountInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const accountUncheckedCreateWithoutRoutine_changesInputObjectSchema =
  Schema
