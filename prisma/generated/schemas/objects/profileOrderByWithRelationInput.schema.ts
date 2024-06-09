import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { accountOrderByWithRelationInputObjectSchema } from "./accountOrderByWithRelationInput.schema"
import { analyticsOrderByWithRelationInputObjectSchema } from "./analyticsOrderByWithRelationInput.schema"
import { clubsOrderByRelationAggregateInputObjectSchema } from "./clubsOrderByRelationAggregateInput.schema"
import { instituteOrderByWithRelationInputObjectSchema } from "./instituteOrderByWithRelationInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.profileOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    username: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    full_name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    semester: z.lazy(() => SortOrderSchema).optional(),
    branch: z.lazy(() => SortOrderSchema).optional(),
    group: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    programme: z.lazy(() => SortOrderSchema).optional(),
    year: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    visibility: z.lazy(() => SortOrderSchema).optional(),
    mess: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    electives: z.lazy(() => SortOrderSchema).optional(),
    analytics: z
      .lazy(() => analyticsOrderByWithRelationInputObjectSchema)
      .optional(),
    clubs_clubs_coordinatorToprofile: z
      .lazy(() => clubsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    clubs_clubs_cocoordinatorToprofile: z
      .lazy(() => clubsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    institute_profile_instituteToinstitute: z
      .lazy(() => instituteOrderByWithRelationInputObjectSchema)
      .optional(),
    account: z
      .lazy(() => accountOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const profileOrderByWithRelationInputObjectSchema = Schema
