import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInput.schema"
import { profileCreateNestedOneWithoutAccountInputObjectSchema } from "./profileCreateNestedOneWithoutAccountInput.schema"
import { routine_changesCreateNestedManyWithoutAccountInputObjectSchema } from "./routine_changesCreateNestedManyWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.accountCreateWithoutAccessInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    created_at: z.coerce.date().optional(),
    password: z.string().optional().nullable(),
    institute_account_instituteToinstitute: z.lazy(
      () =>
        instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInputObjectSchema
    ),
    profile: z
      .lazy(() => profileCreateNestedOneWithoutAccountInputObjectSchema)
      .optional(),
    routine_changes: z
      .lazy(
        () => routine_changesCreateNestedManyWithoutAccountInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const accountCreateWithoutAccessInputObjectSchema = Schema
