import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateManyInstitute_account_instituteToinstituteInputEnvelopeObjectSchema } from "./accountCreateManyInstitute_account_instituteToinstituteInputEnvelope.schema"
import { accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountCreateNestedManyWithoutInstitute_account_instituteToinstituteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              accountCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                accountCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            accountCreateManyInstitute_account_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const accountCreateNestedManyWithoutInstitute_account_instituteToinstituteInputObjectSchema =
  Schema
