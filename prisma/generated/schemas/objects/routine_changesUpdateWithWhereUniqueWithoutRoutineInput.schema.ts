import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesUncheckedUpdateWithoutRoutineInputObjectSchema } from "./routine_changesUncheckedUpdateWithoutRoutineInput.schema"
import { routine_changesUpdateWithoutRoutineInputObjectSchema } from "./routine_changesUpdateWithoutRoutineInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUpdateWithWhereUniqueWithoutRoutineInput> =
  z
    .object({
      where: z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => routine_changesUpdateWithoutRoutineInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedUpdateWithoutRoutineInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routine_changesUpdateWithWhereUniqueWithoutRoutineInputObjectSchema =
  Schema
