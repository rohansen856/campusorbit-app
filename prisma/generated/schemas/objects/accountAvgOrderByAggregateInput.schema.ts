import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.accountAvgOrderByAggregateInput> = z
  .object({
    access_level: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const accountAvgOrderByAggregateInputObjectSchema = Schema
