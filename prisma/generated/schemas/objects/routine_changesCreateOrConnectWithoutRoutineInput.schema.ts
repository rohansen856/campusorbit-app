import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateWithoutRoutineInputObjectSchema } from "./routine_changesCreateWithoutRoutineInput.schema"
import { routine_changesUncheckedCreateWithoutRoutineInputObjectSchema } from "./routine_changesUncheckedCreateWithoutRoutineInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateOrConnectWithoutRoutineInput> =
  z
    .object({
      where: z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => routine_changesCreateWithoutRoutineInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedCreateWithoutRoutineInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routine_changesCreateOrConnectWithoutRoutineInputObjectSchema =
  Schema
