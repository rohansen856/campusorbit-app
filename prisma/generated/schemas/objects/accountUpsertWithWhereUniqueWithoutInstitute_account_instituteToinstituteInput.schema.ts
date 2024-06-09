import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUncheckedUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedUpdateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUpdateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUpsertWithWhereUniqueWithoutInstitute_account_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => accountWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            accountUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            accountUncheckedUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            accountCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const accountUpsertWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema =
  Schema
