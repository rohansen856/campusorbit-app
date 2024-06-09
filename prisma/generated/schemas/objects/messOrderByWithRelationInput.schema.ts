import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { instituteOrderByWithRelationInputObjectSchema } from "./instituteOrderByWithRelationInput.schema"

const Schema: z.ZodType<Prisma.messOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    mess_no: z.lazy(() => SortOrderSchema).optional(),
    day: z.lazy(() => SortOrderSchema).optional(),
    breakfast: z.lazy(() => SortOrderSchema).optional(),
    lunch: z.lazy(() => SortOrderSchema).optional(),
    dinner: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    institute_mess_instituteToinstitute: z
      .lazy(() => instituteOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const messOrderByWithRelationInputObjectSchema = Schema
