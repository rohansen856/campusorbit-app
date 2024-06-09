import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { analyticsUncheckedCreateNestedOneWithoutProfileInputObjectSchema } from "./analyticsUncheckedCreateNestedOneWithoutProfileInput.schema"
import { clubsUncheckedCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { profileCreateelectivesInputObjectSchema } from "./profileCreateelectivesInput.schema"

const Schema: z.ZodType<Prisma.profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      id: z.string(),
      username: z.string().optional().nullable(),
      full_name: z.string().optional().nullable(),
      image: z.string().optional().nullable(),
      semester: z.bigint(),
      branch: z.string(),
      group: z.string().optional().nullable(),
      programme: z.string(),
      year: z.bigint(),
      institute: z.string(),
      visibility: z.boolean().optional(),
      mess: z.number().optional().nullable(),
      electives: z
        .union([
          z.lazy(() => profileCreateelectivesInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      analytics: z
        .lazy(
          () => analyticsUncheckedCreateNestedOneWithoutProfileInputObjectSchema
        )
        .optional(),
      clubs_clubs_coordinatorToprofile: z
        .lazy(
          () =>
            clubsUncheckedCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
