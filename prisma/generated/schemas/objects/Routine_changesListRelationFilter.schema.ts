import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesWhereInputObjectSchema } from "./routine_changesWhereInput.schema"

const Schema: z.ZodType<Prisma.Routine_changesListRelationFilter> = z
  .object({
    every: z.lazy(() => routine_changesWhereInputObjectSchema).optional(),
    some: z.lazy(() => routine_changesWhereInputObjectSchema).optional(),
    none: z.lazy(() => routine_changesWhereInputObjectSchema).optional(),
  })
  .strict()

export const Routine_changesListRelationFilterObjectSchema = Schema
