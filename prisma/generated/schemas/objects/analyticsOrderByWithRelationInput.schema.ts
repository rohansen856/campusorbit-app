import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { profileOrderByWithRelationInputObjectSchema } from "./profileOrderByWithRelationInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.analyticsOrderByWithRelationInput> = z
  .object({
    user_id: z.lazy(() => SortOrderSchema).optional(),
    device: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    fcm_token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    profile: z
      .lazy(() => profileOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const analyticsOrderByWithRelationInputObjectSchema = Schema
