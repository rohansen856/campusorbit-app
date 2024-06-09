import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateWithoutRoutine_changesInputObjectSchema } from "./routineCreateWithoutRoutine_changesInput.schema"
import { routineUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./routineUncheckedCreateWithoutRoutine_changesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineCreateOrConnectWithoutRoutine_changesInput> =
  z
    .object({
      where: z.lazy(() => routineWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => routineCreateWithoutRoutine_changesInputObjectSchema),
        z.lazy(
          () => routineUncheckedCreateWithoutRoutine_changesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routineCreateOrConnectWithoutRoutine_changesInputObjectSchema =
  Schema
