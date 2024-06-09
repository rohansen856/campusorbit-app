import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messCreateManyInstitute_mess_instituteToinstituteInputEnvelopeObjectSchema } from "./messCreateManyInstitute_mess_instituteToinstituteInputEnvelope.schema"
import { messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messWhereUniqueInputObjectSchema } from "./messWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.messUncheckedCreateNestedManyWithoutInstitute_mess_instituteToinstituteInput> =
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
      createMany: z
        .lazy(
          () =>
            messCreateManyInstitute_mess_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => messWhereUniqueInputObjectSchema),
          z.lazy(() => messWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const messUncheckedCreateNestedManyWithoutInstitute_mess_instituteToinstituteInputObjectSchema =
  Schema
