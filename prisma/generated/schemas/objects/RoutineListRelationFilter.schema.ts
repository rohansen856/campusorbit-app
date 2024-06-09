import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineWhereInputObjectSchema } from "./routineWhereInput.schema"

const Schema: z.ZodType<Prisma.RoutineListRelationFilter> = z
  .object({
    every: z.lazy(() => routineWhereInputObjectSchema).optional(),
    some: z.lazy(() => routineWhereInputObjectSchema).optional(),
    none: z.lazy(() => routineWhereInputObjectSchema).optional(),
  })
  .strict()

export const RoutineListRelationFilterObjectSchema = Schema
