import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.accountSumOrderByAggregateInput> = z
  .object({
    access_level: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const accountSumOrderByAggregateInputObjectSchema = Schema
