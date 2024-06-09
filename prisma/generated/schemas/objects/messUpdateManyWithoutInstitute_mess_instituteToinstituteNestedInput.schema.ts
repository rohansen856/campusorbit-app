import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messCreateManyInstitute_mess_instituteToinstituteInputEnvelopeObjectSchema } from "./messCreateManyInstitute_mess_instituteToinstituteInputEnvelope.schema"
import { messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messScalarWhereInputObjectSchema } from "./messScalarWhereInput.schema"
import { messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUpdateManyWithWhereWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUpdateManyWithWhereWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUpdateWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUpdateWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUpsertWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUpsertWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messWhereUniqueInputObjectSchema } from "./messWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.messUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              messUpsertWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                messUpsertWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            messCreateManyInstitute_mess_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => messWhereUniqueInputObjectSchema),
          z.lazy(() => messWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => messWhereUniqueInputObjectSchema),
          z.lazy(() => messWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => messWhereUniqueInputObjectSchema),
          z.lazy(() => messWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => messWhereUniqueInputObjectSchema),
          z.lazy(() => messWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              messUpdateWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                messUpdateWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              messUpdateManyWithWhereWithoutInstitute_mess_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                messUpdateManyWithWhereWithoutInstitute_mess_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => messScalarWhereInputObjectSchema),
          z.lazy(() => messScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const messUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInputObjectSchema =
  Schema
