import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.accessCountOrderByAggregateInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
    details: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const accessCountOrderByAggregateInputObjectSchema = Schema
