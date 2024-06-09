import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUncheckedCreateNestedManyWithoutInstitute_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedCreateNestedManyWithoutInstitute_account_instituteToinstituteInput.schema"
import { coursesUncheckedCreateNestedManyWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedCreateNestedManyWithoutInstitute_courses_instituteToinstituteInput.schema"
import { messUncheckedCreateNestedManyWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedCreateNestedManyWithoutInstitute_mess_instituteToinstituteInput.schema"
import { profileUncheckedCreateNestedManyWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedCreateNestedManyWithoutInstitute_profile_instituteToinstituteInput.schema"
import { routineUncheckedCreateNestedManyWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedCreateNestedManyWithoutInstitute_routine_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInput> =
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
      courses_courses_instituteToinstitute: z
        .lazy(
          () =>
            coursesUncheckedCreateNestedManyWithoutInstitute_courses_instituteToinstituteInputObjectSchema
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

export const instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema =
  Schema
