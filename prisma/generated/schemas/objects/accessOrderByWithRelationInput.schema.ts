import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { accountOrderByRelationAggregateInputObjectSchema } from "./accountOrderByRelationAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.accessOrderByWithRelationInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
    details: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    domain: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    account: z
      .lazy(() => accountOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const accessOrderByWithRelationInputObjectSchema = Schema
