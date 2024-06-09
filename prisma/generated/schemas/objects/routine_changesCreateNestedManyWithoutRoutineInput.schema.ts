import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateManyRoutineInputEnvelopeObjectSchema } from "./routine_changesCreateManyRoutineInputEnvelope.schema"
import { routine_changesCreateOrConnectWithoutRoutineInputObjectSchema } from "./routine_changesCreateOrConnectWithoutRoutineInput.schema"
import { routine_changesCreateWithoutRoutineInputObjectSchema } from "./routine_changesCreateWithoutRoutineInput.schema"
import { routine_changesUncheckedCreateWithoutRoutineInputObjectSchema } from "./routine_changesUncheckedCreateWithoutRoutineInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateNestedManyWithoutRoutineInput> =
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
      createMany: z
        .lazy(() => routine_changesCreateManyRoutineInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const routine_changesCreateNestedManyWithoutRoutineInputObjectSchema =
  Schema
