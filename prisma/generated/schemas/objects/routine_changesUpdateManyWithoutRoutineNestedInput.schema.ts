import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateManyRoutineInputEnvelopeObjectSchema } from "./routine_changesCreateManyRoutineInputEnvelope.schema"
import { routine_changesCreateOrConnectWithoutRoutineInputObjectSchema } from "./routine_changesCreateOrConnectWithoutRoutineInput.schema"
import { routine_changesCreateWithoutRoutineInputObjectSchema } from "./routine_changesCreateWithoutRoutineInput.schema"
import { routine_changesScalarWhereInputObjectSchema } from "./routine_changesScalarWhereInput.schema"
import { routine_changesUncheckedCreateWithoutRoutineInputObjectSchema } from "./routine_changesUncheckedCreateWithoutRoutineInput.schema"
import { routine_changesUpdateManyWithWhereWithoutRoutineInputObjectSchema } from "./routine_changesUpdateManyWithWhereWithoutRoutineInput.schema"
import { routine_changesUpdateWithWhereUniqueWithoutRoutineInputObjectSchema } from "./routine_changesUpdateWithWhereUniqueWithoutRoutineInput.schema"
import { routine_changesUpsertWithWhereUniqueWithoutRoutineInputObjectSchema } from "./routine_changesUpsertWithWhereUniqueWithoutRoutineInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUpdateManyWithoutRoutineNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => routine_changesCreateWithoutRoutineInputObjectSchema),
          z
            .lazy(() => routine_changesCreateWithoutRoutineInputObjectSchema)
            .array(),
          z.lazy(
            () => routine_changesUncheckedCreateWithoutRoutineInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUncheckedCreateWithoutRoutineInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => routine_changesCreateOrConnectWithoutRoutineInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesCreateOrConnectWithoutRoutineInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              routine_changesUpsertWithWhereUniqueWithoutRoutineInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUpsertWithWhereUniqueWithoutRoutineInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => routine_changesCreateManyRoutineInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              routine_changesUpdateWithWhereUniqueWithoutRoutineInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUpdateWithWhereUniqueWithoutRoutineInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              routine_changesUpdateManyWithWhereWithoutRoutineInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUpdateManyWithWhereWithoutRoutineInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => routine_changesScalarWhereInputObjectSchema),
          z.lazy(() => routine_changesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const routine_changesUpdateManyWithoutRoutineNestedInputObjectSchema =
  Schema
