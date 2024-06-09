import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.routineSumOrderByAggregateInput> = z
  .object({
    day: z.lazy(() => SortOrderSchema).optional(),
    semester: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const routineSumOrderByAggregateInputObjectSchema = Schema
