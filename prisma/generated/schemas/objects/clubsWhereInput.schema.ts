import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BigIntFilterObjectSchema } from "./BigIntFilter.schema"
import { InstituteRelationFilterObjectSchema } from "./InstituteRelationFilter.schema"
import { instituteWhereInputObjectSchema } from "./instituteWhereInput.schema"
import { ProfileRelationFilterObjectSchema } from "./ProfileRelationFilter.schema"
import { profileWhereInputObjectSchema } from "./profileWhereInput.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"
import { UuidNullableFilterObjectSchema } from "./UuidNullableFilter.schema"

const Schema: z.ZodType<Prisma.clubsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => clubsWhereInputObjectSchema),
        z.lazy(() => clubsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => clubsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => clubsWhereInputObjectSchema),
        z.lazy(() => clubsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    field: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    coordinator: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    cocoordinator: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    members: z
      .union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()])
      .optional(),
    profile_clubs_coordinatorToprofile: z
      .union([
        z.lazy(() => ProfileRelationFilterObjectSchema),
        z.lazy(() => profileWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    profile_clubs_cocoordinatorToprofile: z
      .union([
        z.lazy(() => ProfileRelationFilterObjectSchema),
        z.lazy(() => profileWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    institute_clubs_instituteToinstitute: z
      .union([
        z.lazy(() => InstituteRelationFilterObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const clubsWhereInputObjectSchema = Schema
