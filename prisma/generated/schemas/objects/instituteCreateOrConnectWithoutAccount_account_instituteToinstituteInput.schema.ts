import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateOrConnectWithoutAccount_account_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => instituteWhereUniqueInputObjectSchema),
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

export const instituteCreateOrConnectWithoutAccount_account_instituteToinstituteInputObjectSchema =
  Schema
