import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteUpsertWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./instituteUpsertWithoutAccount_account_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInput> =
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
      upsert: z
        .lazy(
          () =>
            instituteUpsertWithoutAccount_account_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              instituteUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInputObjectSchema =
  Schema
