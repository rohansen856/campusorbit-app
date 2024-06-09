import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AccountListRelationFilterObjectSchema } from "./AccountListRelationFilter.schema"
import { ClubsListRelationFilterObjectSchema } from "./ClubsListRelationFilter.schema"
import { CoursesListRelationFilterObjectSchema } from "./CoursesListRelationFilter.schema"
import { MessListRelationFilterObjectSchema } from "./MessListRelationFilter.schema"
import { ProfileListRelationFilterObjectSchema } from "./ProfileListRelationFilter.schema"
import { RoutineListRelationFilterObjectSchema } from "./RoutineListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.instituteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => instituteWhereInputObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => instituteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => instituteWhereInputObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    full_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    domain: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    account_account_instituteToinstitute: z
      .lazy(() => AccountListRelationFilterObjectSchema)
      .optional(),
    clubs_clubs_instituteToinstitute: z
      .lazy(() => ClubsListRelationFilterObjectSchema)
      .optional(),
    courses_courses_instituteToinstitute: z
      .lazy(() => CoursesListRelationFilterObjectSchema)
      .optional(),
    mess_mess_instituteToinstitute: z
      .lazy(() => MessListRelationFilterObjectSchema)
      .optional(),
    profile_profile_instituteToinstitute: z
      .lazy(() => ProfileListRelationFilterObjectSchema)
      .optional(),
    routine_routine_instituteToinstitute: z
      .lazy(() => RoutineListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const instituteWhereInputObjectSchema = Schema
