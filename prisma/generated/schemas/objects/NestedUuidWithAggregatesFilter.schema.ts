import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedStringFilterObjectSchema } from "./NestedStringFilter.schema"

const Schema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedUuidWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  })
  .strict()

export const NestedUuidWithAggregatesFilterObjectSchema = Schema
