import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateManyInstitute_account_instituteToinstituteInputEnvelopeObjectSchema } from "./accountCreateManyInstitute_account_instituteToinstituteInputEnvelope.schema"
import { accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountCreateOrConnectWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountScalarWhereInputObjectSchema } from "./accountScalarWhereInput.schema"
import { accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedCreateWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUpdateManyWithWhereWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUpdateManyWithWhereWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUpdateWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUpdateWithWhereUniqueWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountUpsertWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUpsertWithWhereUniqueWithoutInstitute_account_instituteToinstituteInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateManyWithoutInstitute_account_instituteToinstituteNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              accountUpsertWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                accountUpsertWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema
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
      set: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              accountUpdateWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                accountUpdateWithWhereUniqueWithoutInstitute_account_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              accountUpdateManyWithWhereWithoutInstitute_account_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                accountUpdateManyWithWhereWithoutInstitute_account_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => accountScalarWhereInputObjectSchema),
          z.lazy(() => accountScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const accountUpdateManyWithoutInstitute_account_instituteToinstituteNestedInputObjectSchema =
  Schema
