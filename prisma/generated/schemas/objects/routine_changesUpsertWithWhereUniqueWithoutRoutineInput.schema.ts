import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateWithoutRoutineInputObjectSchema } from "./routine_changesCreateWithoutRoutineInput.schema"
import { routine_changesUncheckedCreateWithoutRoutineInputObjectSchema } from "./routine_changesUncheckedCreateWithoutRoutineInput.schema"
import { routine_changesUncheckedUpdateWithoutRoutineInputObjectSchema } from "./routine_changesUncheckedUpdateWithoutRoutineInput.schema"
import { routine_changesUpdateWithoutRoutineInputObjectSchema } from "./routine_changesUpdateWithoutRoutineInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUpsertWithWhereUniqueWithoutRoutineInput> =
  z
    .object({
      where: z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => routine_changesUpdateWithoutRoutineInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedUpdateWithoutRoutineInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => routine_changesCreateWithoutRoutineInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedCreateWithoutRoutineInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routine_changesUpsertWithWhereUniqueWithoutRoutineInputObjectSchema =
  Schema
