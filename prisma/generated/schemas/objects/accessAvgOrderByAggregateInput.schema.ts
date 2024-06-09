import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.accessAvgOrderByAggregateInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const accessAvgOrderByAggregateInputObjectSchema = Schema
