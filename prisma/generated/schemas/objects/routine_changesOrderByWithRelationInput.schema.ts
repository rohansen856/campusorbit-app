import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { accountOrderByWithRelationInputObjectSchema } from "./accountOrderByWithRelationInput.schema"
import { routineOrderByWithRelationInputObjectSchema } from "./routineOrderByWithRelationInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.routine_changesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    created_by: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    routine_id: z.lazy(() => SortOrderSchema).optional(),
    account: z
      .lazy(() => accountOrderByWithRelationInputObjectSchema)
      .optional(),
    routine: z
      .lazy(() => routineOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const routine_changesOrderByWithRelationInputObjectSchema = Schema
