import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateNestedOneWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileCreateNestedOneWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileCreateNestedOneWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileCreateNestedOneWithoutClubs_clubs_coordinatorToprofileInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateWithoutInstitute_clubs_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      type: z.string(),
      field: z.string(),
      image: z.string().optional().nullable(),
      members: z.number().optional(),
      profile_clubs_coordinatorToprofile: z
        .lazy(
          () =>
            profileCreateNestedOneWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        )
        .optional(),
      profile_clubs_cocoordinatorToprofile: z
        .lazy(
          () =>
            profileCreateNestedOneWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
