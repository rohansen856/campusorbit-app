import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.routineAvgOrderByAggregateInput> = z
  .object({
    day: z.lazy(() => SortOrderSchema).optional(),
    semester: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const routineAvgOrderByAggregateInputObjectSchema = Schema
