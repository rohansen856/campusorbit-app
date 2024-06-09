import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              instituteCreateWithoutAccount_account_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            instituteCreateOrConnectWithoutAccount_account_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const instituteCreateNestedOneWithoutAccount_account_instituteToinstituteInputObjectSchema =
  Schema
