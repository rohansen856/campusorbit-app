import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.messScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => messScalarWhereInputObjectSchema),
        z.lazy(() => messScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => messScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => messScalarWhereInputObjectSchema),
        z.lazy(() => messScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    mess_no: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    day: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    breakfast: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lunch: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dinner: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const messScalarWhereInputObjectSchema = Schema
