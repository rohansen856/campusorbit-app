import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { coursesCreateNestedManyWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateNestedManyWithoutInstitute_courses_instituteToinstituteInput.schema"
import { messCreateNestedManyWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateNestedManyWithoutInstitute_mess_instituteToinstituteInput.schema"
import { profileCreateNestedManyWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateNestedManyWithoutInstitute_profile_instituteToinstituteInput.schema"
import { routineCreateNestedManyWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateNestedManyWithoutInstitute_routine_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateWithoutAccount_account_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      full_name: z.string(),
      domain: z.string(),
      clubs_clubs_instituteToinstitute: z
        .lazy(
          () =>
            clubsCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        )
        .optional(),
      courses_courses_instituteToinstitute: z
        .lazy(
          () =>
            coursesCreateNestedManyWithoutInstitute_courses_instituteToinstituteInputObjectSchema
        )
        .optional(),
      mess_mess_instituteToinstitute: z
        .lazy(
          () =>
            messCreateNestedManyWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        )
        .optional(),
      profile_profile_instituteToinstitute: z
        .lazy(
          () =>
            profileCreateNestedManyWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        )
        .optional(),
      routine_routine_instituteToinstitute: z
        .lazy(
          () =>
            routineCreateNestedManyWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const instituteCreateWithoutAccount_account_instituteToinstituteInputObjectSchema =
  Schema
