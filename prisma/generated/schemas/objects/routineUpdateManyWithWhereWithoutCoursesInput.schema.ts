import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineScalarWhereInputObjectSchema } from "./routineScalarWhereInput.schema"
import { routineUncheckedUpdateManyWithoutRoutineInputObjectSchema } from "./routineUncheckedUpdateManyWithoutRoutineInput.schema"
import { routineUpdateManyMutationInputObjectSchema } from "./routineUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateManyWithWhereWithoutCoursesInput> =
  z
    .object({
      where: z.lazy(() => routineScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => routineUpdateManyMutationInputObjectSchema),
        z.lazy(() => routineUncheckedUpdateManyWithoutRoutineInputObjectSchema),
      ]),
    })
    .strict()

export const routineUpdateManyWithWhereWithoutCoursesInputObjectSchema = Schema
