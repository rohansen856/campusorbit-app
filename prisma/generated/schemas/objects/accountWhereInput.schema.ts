import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AccessRelationFilterObjectSchema } from "./AccessRelationFilter.schema"
import { accessWhereInputObjectSchema } from "./accessWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { InstituteRelationFilterObjectSchema } from "./InstituteRelationFilter.schema"
import { instituteWhereInputObjectSchema } from "./instituteWhereInput.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { ProfileRelationFilterObjectSchema } from "./ProfileRelationFilter.schema"
import { profileWhereInputObjectSchema } from "./profileWhereInput.schema"
import { Routine_changesListRelationFilterObjectSchema } from "./Routine_changesListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.accountWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => accountWhereInputObjectSchema),
        z.lazy(() => accountWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => accountWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => accountWhereInputObjectSchema),
        z.lazy(() => accountWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    access_level: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    access: z
      .union([
        z.lazy(() => AccessRelationFilterObjectSchema),
        z.lazy(() => accessWhereInputObjectSchema),
      ])
      .optional(),
    institute_account_instituteToinstitute: z
      .union([
        z.lazy(() => InstituteRelationFilterObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema),
      ])
      .optional(),
    profile: z
      .union([
        z.lazy(() => ProfileRelationFilterObjectSchema),
        z.lazy(() => profileWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    routine_changes: z
      .lazy(() => Routine_changesListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const accountWhereInputObjectSchema = Schema
