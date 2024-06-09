import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUncheckedUpdateManyWithoutInstitute_account_instituteToinstituteNestedInputObjectSchema } from "./accountUncheckedUpdateManyWithoutInstitute_account_instituteToinstituteNestedInput.schema"
import { clubsUncheckedUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInputObjectSchema } from "./clubsUncheckedUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInput.schema"
import { messUncheckedUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInputObjectSchema } from "./messUncheckedUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInput.schema"
import { profileUncheckedUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInputObjectSchema } from "./profileUncheckedUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInput.schema"
import { routineUncheckedUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInputObjectSchema } from "./routineUncheckedUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInput> =
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
      account_account_instituteToinstitute: z
        .lazy(
          () =>
            accountUncheckedUpdateManyWithoutInstitute_account_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      clubs_clubs_instituteToinstitute: z
        .lazy(
          () =>
            clubsUncheckedUpdateManyWithoutInstitute_clubs_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      mess_mess_instituteToinstitute: z
        .lazy(
          () =>
            messUncheckedUpdateManyWithoutInstitute_mess_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      profile_profile_instituteToinstitute: z
        .lazy(
          () =>
            profileUncheckedUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
      routine_routine_instituteToinstitute: z
        .lazy(
          () =>
            routineUncheckedUpdateManyWithoutInstitute_routine_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema =
  Schema
