import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUncheckedCreateNestedManyWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedCreateNestedManyWithoutInstitute_account_instituteToinstituteInput.schema"
import { clubsUncheckedCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { messUncheckedCreateNestedManyWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedCreateNestedManyWithoutInstitute_mess_instituteToinstituteInput.schema"
import { profileUncheckedCreateNestedManyWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedCreateNestedManyWithoutInstitute_profile_instituteToinstituteInput.schema"
import { routineUncheckedCreateNestedManyWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedCreateNestedManyWithoutInstitute_routine_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      full_name: z.string(),
      domain: z.string(),
      account_account_instituteToinstitute: z
        .lazy(
          () =>
            accountUncheckedCreateNestedManyWithoutInstitute_account_instituteToinstituteInputObjectSchema
        )
        .optional(),
      clubs_clubs_instituteToinstitute: z
        .lazy(
          () =>
            clubsUncheckedCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        )
        .optional(),
      mess_mess_instituteToinstitute: z
        .lazy(
          () =>
            messUncheckedCreateNestedManyWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        )
        .optional(),
      profile_profile_instituteToinstitute: z
        .lazy(
          () =>
            profileUncheckedCreateNestedManyWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        )
        .optional(),
      routine_routine_instituteToinstitute: z
        .lazy(
          () =>
            routineUncheckedCreateNestedManyWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema =
  Schema
