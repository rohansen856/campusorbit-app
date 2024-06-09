import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInputObjectSchema } from "./clubsUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInput.schema"
import { coursesUpdateManyWithoutInstitute_courses_instituteToinstituteNestedInputObjectSchema } from "./coursesUpdateManyWithoutInstitute_courses_instituteToinstituteNestedInput.schema"
import { messUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInputObjectSchema } from "./messUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInput.schema"
import { profileUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInputObjectSchema } from "./profileUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInput.schema"
import { routineUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInputObjectSchema } from "./routineUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.instituteUpdateWithoutAccount_account_instituteToinstituteInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      domain: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      clubs_clubs_instituteToinstitute: z
        .lazy(
          () =>
            clubsUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      courses_courses_instituteToinstitute: z
        .lazy(
          () =>
            coursesUpdateManyWithoutInstitute_courses_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      mess_mess_instituteToinstitute: z
        .lazy(
          () =>
            messUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      profile_profile_instituteToinstitute: z
        .lazy(
          () =>
            profileUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      routine_routine_instituteToinstitute: z
        .lazy(
          () =>
            routineUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const instituteUpdateWithoutAccount_account_instituteToinstituteInputObjectSchema =
  Schema
