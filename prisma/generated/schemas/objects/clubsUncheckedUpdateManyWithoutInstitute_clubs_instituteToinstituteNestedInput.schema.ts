import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelopeObjectSchema } from "./clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelope.schema"
import { clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsScalarWhereInputObjectSchema } from "./clubsScalarWhereInput.schema"
import { clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUpdateManyWithWhereWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUpdateManyWithWhereWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUpdateWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUpdateWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUpsertWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUpsertWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUncheckedUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              clubsUpsertWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpsertWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              clubsUpdateWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpdateWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              clubsUpdateManyWithWhereWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpdateManyWithWhereWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => clubsScalarWhereInputObjectSchema),
          z.lazy(() => clubsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const clubsUncheckedUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInputObjectSchema =
  Schema
