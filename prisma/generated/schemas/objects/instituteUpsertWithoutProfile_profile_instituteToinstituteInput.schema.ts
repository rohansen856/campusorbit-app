import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutProfile_profile_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUpsertWithoutProfile_profile_instituteToinstituteInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            instituteUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            instituteCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const instituteUpsertWithoutProfile_profile_instituteToinstituteInputObjectSchema =
  Schema
