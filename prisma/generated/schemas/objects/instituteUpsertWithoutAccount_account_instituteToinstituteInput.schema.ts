import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutAccount_account_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUpsertWithoutAccount_account_instituteToinstituteInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            instituteUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            instituteCreateWithoutAccount_account_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const instituteUpsertWithoutAccount_account_instituteToinstituteInputObjectSchema =
  Schema
