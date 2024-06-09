import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { accountOrderByRelationAggregateInputObjectSchema } from "./accountOrderByRelationAggregateInput.schema"
import { clubsOrderByRelationAggregateInputObjectSchema } from "./clubsOrderByRelationAggregateInput.schema"
import { coursesOrderByRelationAggregateInputObjectSchema } from "./coursesOrderByRelationAggregateInput.schema"
import { messOrderByRelationAggregateInputObjectSchema } from "./messOrderByRelationAggregateInput.schema"
import { profileOrderByRelationAggregateInputObjectSchema } from "./profileOrderByRelationAggregateInput.schema"
import { routineOrderByRelationAggregateInputObjectSchema } from "./routineOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<Prisma.instituteOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    full_name: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
    account_account_instituteToinstitute: z
      .lazy(() => accountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    clubs_clubs_instituteToinstitute: z
      .lazy(() => clubsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    courses_courses_instituteToinstitute: z
      .lazy(() => coursesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    mess_mess_instituteToinstitute: z
      .lazy(() => messOrderByRelationAggregateInputObjectSchema)
      .optional(),
    profile_profile_instituteToinstitute: z
      .lazy(() => profileOrderByRelationAggregateInputObjectSchema)
      .optional(),
    routine_routine_instituteToinstitute: z
      .lazy(() => routineOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const instituteOrderByWithRelationInputObjectSchema = Schema
