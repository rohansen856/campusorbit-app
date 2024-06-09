import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { instituteOrderByWithRelationInputObjectSchema } from "./instituteOrderByWithRelationInput.schema"
import { profileOrderByWithRelationInputObjectSchema } from "./profileOrderByWithRelationInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.clubsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    field: z.lazy(() => SortOrderSchema).optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    coordinator: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    cocoordinator: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    members: z.lazy(() => SortOrderSchema).optional(),
    profile_clubs_coordinatorToprofile: z
      .lazy(() => profileOrderByWithRelationInputObjectSchema)
      .optional(),
    profile_clubs_cocoordinatorToprofile: z
      .lazy(() => profileOrderByWithRelationInputObjectSchema)
      .optional(),
    institute_clubs_instituteToinstitute: z
      .lazy(() => instituteOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const clubsOrderByWithRelationInputObjectSchema = Schema
