import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUncheckedUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedUpdateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUpdateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateWithWhereUniqueWithoutInstitute_account_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => accountWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            accountUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            accountUncheckedUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const accountUpdateWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema =
  Schema
