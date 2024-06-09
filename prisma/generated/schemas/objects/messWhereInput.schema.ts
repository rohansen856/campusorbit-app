import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { InstituteRelationFilterObjectSchema } from "./InstituteRelationFilter.schema"
import { instituteWhereInputObjectSchema } from "./instituteWhereInput.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.messWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => messWhereInputObjectSchema),
        z.lazy(() => messWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => messWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => messWhereInputObjectSchema),
        z.lazy(() => messWhereInputObjectSchema).array(),
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
    institute_mess_instituteToinstitute: z
      .union([
        z.lazy(() => InstituteRelationFilterObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const messWhereInputObjectSchema = Schema
