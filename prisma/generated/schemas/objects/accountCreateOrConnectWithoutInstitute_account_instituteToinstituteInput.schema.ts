import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => accountWhereUniqueInputObjectSchema),
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

export const accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInputObjectSchema =
  Schema
