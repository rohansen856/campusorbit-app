import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { AccountRelationFilterObjectSchema } from "./AccountRelationFilter.schema"
import { accountWhereInputObjectSchema } from "./accountWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { RoutineRelationFilterObjectSchema } from "./RoutineRelationFilter.schema"
import { routineWhereInputObjectSchema } from "./routineWhereInput.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.routine_changesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => routine_changesWhereInputObjectSchema),
        z.lazy(() => routine_changesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => routine_changesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => routine_changesWhereInputObjectSchema),
        z.lazy(() => routine_changesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    created_by: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    routine_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    account: z
      .union([
        z.lazy(() => AccountRelationFilterObjectSchema),
        z.lazy(() => accountWhereInputObjectSchema),
      ])
      .optional(),
    routine: z
      .union([
        z.lazy(() => RoutineRelationFilterObjectSchema),
        z.lazy(() => routineWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const routine_changesWhereInputObjectSchema = Schema
