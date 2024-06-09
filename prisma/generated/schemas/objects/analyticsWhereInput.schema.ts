import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ProfileRelationFilterObjectSchema } from "./ProfileRelationFilter.schema"
import { profileWhereInputObjectSchema } from "./profileWhereInput.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.analyticsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => analyticsWhereInputObjectSchema),
        z.lazy(() => analyticsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => analyticsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => analyticsWhereInputObjectSchema),
        z.lazy(() => analyticsWhereInputObjectSchema).array(),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    device: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fcm_token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    profile: z
      .union([
        z.lazy(() => ProfileRelationFilterObjectSchema),
        z.lazy(() => profileWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const analyticsWhereInputObjectSchema = Schema
