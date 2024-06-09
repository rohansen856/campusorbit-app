import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { accessOrderByWithRelationInputObjectSchema } from "./accessOrderByWithRelationInput.schema"
import { instituteOrderByWithRelationInputObjectSchema } from "./instituteOrderByWithRelationInput.schema"
import { profileOrderByWithRelationInputObjectSchema } from "./profileOrderByWithRelationInput.schema"
import { routine_changesOrderByRelationAggregateInputObjectSchema } from "./routine_changesOrderByRelationAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.accountOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    access_level: z.lazy(() => SortOrderSchema).optional(),
    password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    access: z.lazy(() => accessOrderByWithRelationInputObjectSchema).optional(),
    institute_account_instituteToinstitute: z
      .lazy(() => instituteOrderByWithRelationInputObjectSchema)
      .optional(),
    profile: z
      .lazy(() => profileOrderByWithRelationInputObjectSchema)
      .optional(),
    routine_changes: z
      .lazy(() => routine_changesOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const accountOrderByWithRelationInputObjectSchema = Schema
