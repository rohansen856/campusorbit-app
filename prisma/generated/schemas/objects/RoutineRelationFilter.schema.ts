import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineWhereInputObjectSchema } from "./routineWhereInput.schema"

const Schema: z.ZodType<Prisma.RoutineRelationFilter> = z
  .object({
    is: z
      .lazy(() => routineWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => routineWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const RoutineRelationFilterObjectSchema = Schema
