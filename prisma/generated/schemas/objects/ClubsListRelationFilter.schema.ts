import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsWhereInputObjectSchema } from "./clubsWhereInput.schema"

const Schema: z.ZodType<Prisma.ClubsListRelationFilter> = z
  .object({
    every: z.lazy(() => clubsWhereInputObjectSchema).optional(),
    some: z.lazy(() => clubsWhereInputObjectSchema).optional(),
    none: z.lazy(() => clubsWhereInputObjectSchema).optional(),
  })
  .strict()

export const ClubsListRelationFilterObjectSchema = Schema
