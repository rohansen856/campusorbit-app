import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AccountRelationFilterObjectSchema } from "./AccountRelationFilter.schema"
import { accountWhereInputObjectSchema } from "./accountWhereInput.schema"
import { AnalyticsRelationFilterObjectSchema } from "./AnalyticsRelationFilter.schema"
import { analyticsWhereInputObjectSchema } from "./analyticsWhereInput.schema"
import { BigIntFilterObjectSchema } from "./BigIntFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { ClubsListRelationFilterObjectSchema } from "./ClubsListRelationFilter.schema"
import { InstituteRelationFilterObjectSchema } from "./InstituteRelationFilter.schema"
import { instituteWhereInputObjectSchema } from "./instituteWhereInput.schema"
import { IntNullableFilterObjectSchema } from "./IntNullableFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.profileWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => profileWhereInputObjectSchema),
        z.lazy(() => profileWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => profileWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => profileWhereInputObjectSchema),
        z.lazy(() => profileWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    username: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    full_name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    semester: z
      .union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()])
      .optional(),
    branch: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    group: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    programme: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    year: z
      .union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()])
      .optional(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    visibility: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    mess: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    electives: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    analytics: z
      .union([
        z.lazy(() => AnalyticsRelationFilterObjectSchema),
        z.lazy(() => analyticsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    clubs_clubs_coordinatorToprofile: z
      .lazy(() => ClubsListRelationFilterObjectSchema)
      .optional(),
    clubs_clubs_cocoordinatorToprofile: z
      .lazy(() => ClubsListRelationFilterObjectSchema)
      .optional(),
    institute_profile_instituteToinstitute: z
      .union([
        z.lazy(() => InstituteRelationFilterObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema),
      ])
      .optional(),
    account: z
      .union([
        z.lazy(() => AccountRelationFilterObjectSchema),
        z.lazy(() => accountWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const profileWhereInputObjectSchema = Schema
