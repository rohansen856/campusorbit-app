import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateNestedOneWithoutProfileInputObjectSchema } from "./accountCreateNestedOneWithoutProfileInput.schema"
import { analyticsCreateNestedOneWithoutProfileInputObjectSchema } from "./analyticsCreateNestedOneWithoutProfileInput.schema"
import { clubsCreateNestedManyWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateNestedManyWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { profileCreateelectivesInputObjectSchema } from "./profileCreateelectivesInput.schema"

const Schema: z.ZodType<Prisma.profileCreateWithoutInstitute_profile_instituteToinstituteInput> =
  z
    .object({
      username: z.string().optional().nullable(),
      full_name: z.string().optional().nullable(),
      image: z.string().optional().nullable(),
      semester: z.bigint(),
      branch: z.string(),
      group: z.string().optional().nullable(),
      programme: z.string(),
      year: z.bigint(),
      visibility: z.boolean().optional(),
      mess: z.number().optional().nullable(),
      electives: z
        .union([
          z.lazy(() => profileCreateelectivesInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
      analytics: z
        .lazy(() => analyticsCreateNestedOneWithoutProfileInputObjectSchema)
        .optional(),
      clubs_clubs_coordinatorToprofile: z
        .lazy(
          () =>
            clubsCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        )
        .optional(),
      clubs_clubs_cocoordinatorToprofile: z
        .lazy(
          () =>
            clubsCreateNestedManyWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
        )
        .optional(),
      account: z.lazy(
        () => accountCreateNestedOneWithoutProfileInputObjectSchema
      ),
    })
    .strict()

export const profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema =
  Schema
