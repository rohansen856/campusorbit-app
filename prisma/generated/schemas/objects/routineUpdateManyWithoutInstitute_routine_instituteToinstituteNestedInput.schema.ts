import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateManyInstitute_routine_instituteToinstituteInputEnvelopeObjectSchema } from "./routineCreateManyInstitute_routine_instituteToinstituteInputEnvelope.schema"
import { routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineScalarWhereInputObjectSchema } from "./routineScalarWhereInput.schema"
import { routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUpdateManyWithWhereWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUpdateManyWithWhereWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUpdateWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUpdateWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUpsertWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUpsertWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              routineUpsertWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineUpsertWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            routineCreateManyInstitute_routine_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => routineWhereUniqueInputObjectSchema),
          z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => routineWhereUniqueInputObjectSchema),
          z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => routineWhereUniqueInputObjectSchema),
          z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => routineWhereUniqueInputObjectSchema),
          z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              routineUpdateWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineUpdateWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              routineUpdateManyWithWhereWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineUpdateManyWithWhereWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => routineScalarWhereInputObjectSchema),
          z.lazy(() => routineScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const routineUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInputObjectSchema =
  Schema
