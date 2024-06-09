import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessCreateNestedOneWithoutAccountInputObjectSchema } from "./accessCreateNestedOneWithoutAccountInput.schema"
import { instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInput.schema"
import { profileCreateNestedOneWithoutAccountInputObjectSchema } from "./profileCreateNestedOneWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.accountCreateWithoutRoutine_changesInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    created_at: z.coerce.date().optional(),
    password: z.string().optional().nullable(),
    access: z
      .lazy(() => accessCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
    institute_account_instituteToinstitute: z.lazy(
      () =>
        instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInputObjectSchema
    ),
    profile: z
      .lazy(() => profileCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
  })
  .strict()

export const accountCreateWithoutRoutine_changesInputObjectSchema = Schema
