import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateWithoutRoutine_changesInputObjectSchema } from "./routineCreateWithoutRoutine_changesInput.schema"
import { routineUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./routineUncheckedCreateWithoutRoutine_changesInput.schema"
import { routineUncheckedUpdateWithoutRoutine_changesInputObjectSchema } from "./routineUncheckedUpdateWithoutRoutine_changesInput.schema"
import { routineUpdateWithoutRoutine_changesInputObjectSchema } from "./routineUpdateWithoutRoutine_changesInput.schema"

const Schema: z.ZodType<Prisma.routineUpsertWithoutRoutine_changesInput> = z
  .object({
    update: z.union([
      z.lazy(() => routineUpdateWithoutRoutine_changesInputObjectSchema),
      z.lazy(
        () => routineUncheckedUpdateWithoutRoutine_changesInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => routineCreateWithoutRoutine_changesInputObjectSchema),
      z.lazy(
        () => routineUncheckedCreateWithoutRoutine_changesInputObjectSchema
      ),
    ]),
  })
  .strict()

export const routineUpsertWithoutRoutine_changesInputObjectSchema = Schema
