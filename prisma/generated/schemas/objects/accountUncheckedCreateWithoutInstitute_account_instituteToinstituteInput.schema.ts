import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileUncheckedCreateNestedOneWithoutAccountInputObjectSchema } from "./profileUncheckedCreateNestedOneWithoutAccountInput.schema"
import { routine_changesUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from "./routine_changesUncheckedCreateNestedManyWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      created_at: z.coerce.date().optional(),
      access_level: z.number().optional(),
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

export const accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema =
  Schema
