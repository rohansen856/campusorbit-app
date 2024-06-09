import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.clubsAvgOrderByAggregateInput> = z
  .object({
    members: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const clubsAvgOrderByAggregateInputObjectSchema = Schema
