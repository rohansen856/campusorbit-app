import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateOrConnectWithoutRoutine_changesInputObjectSchema } from "./routineCreateOrConnectWithoutRoutine_changesInput.schema"
import { routineCreateWithoutRoutine_changesInputObjectSchema } from "./routineCreateWithoutRoutine_changesInput.schema"
import { routineUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./routineUncheckedCreateWithoutRoutine_changesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineCreateNestedOneWithoutRoutine_changesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => routineCreateWithoutRoutine_changesInputObjectSchema),
          z.lazy(
            () => routineUncheckedCreateWithoutRoutine_changesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => routineCreateOrConnectWithoutRoutine_changesInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => routineWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const routineCreateNestedOneWithoutRoutine_changesInputObjectSchema =
  Schema
