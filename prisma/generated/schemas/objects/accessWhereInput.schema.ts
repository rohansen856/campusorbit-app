import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AccountListRelationFilterObjectSchema } from "./AccountListRelationFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

const Schema: z.ZodType<Prisma.accessWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => accessWhereInputObjectSchema),
        z.lazy(() => accessWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => accessWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => accessWhereInputObjectSchema),
        z.lazy(() => accessWhereInputObjectSchema).array(),
      ])
      .optional(),
    level: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    details: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    domain: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    account: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const accessWhereInputObjectSchema = Schema
