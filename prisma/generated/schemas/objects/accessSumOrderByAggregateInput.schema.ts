import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.accessSumOrderByAggregateInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const accessSumOrderByAggregateInputObjectSchema = Schema
