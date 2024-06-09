import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedBigIntFilterObjectSchema } from "./NestedBigIntFilter.schema"
import { NestedFloatFilterObjectSchema } from "./NestedFloatFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"

const Schema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z
  .object({
    equals: z.bigint().optional(),
    in: z.union([z.bigint().array(), z.bigint()]).optional(),
    notIn: z.union([z.bigint().array(), z.bigint()]).optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z
      .union([
        z.bigint(),
        z.lazy(() => NestedBigIntWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
    _sum: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBigIntFilterObjectSchema).optional(),
  })
  .strict()

export const NestedBigIntWithAggregatesFilterObjectSchema = Schema
