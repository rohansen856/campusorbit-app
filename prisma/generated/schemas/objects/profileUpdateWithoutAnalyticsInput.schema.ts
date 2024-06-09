import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUpdateOneRequiredWithoutProfileNestedInputObjectSchema } from "./accountUpdateOneRequiredWithoutProfileNestedInput.schema"
import { BigIntFieldUpdateOperationsInputObjectSchema } from "./BigIntFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { clubsUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInputObjectSchema } from "./clubsUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInput.schema"
import { clubsUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInputObjectSchema } from "./clubsUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInput.schema"
import { instituteUpdateOneRequiredWithoutProfile_profile_instituteToinstituteNestedInputObjectSchema } from "./instituteUpdateOneRequiredWithoutProfile_profile_instituteToinstituteNestedInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateelectivesInputObjectSchema } from "./profileUpdateelectivesInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.profileUpdateWithoutAnalyticsInput> = z
  .object({
    username: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    full_name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    semester: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    branch: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    group: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    programme: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    year: z
      .union([
        z.bigint(),
        z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    visibility: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mess: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    electives: z
      .union([
        z.lazy(() => profileUpdateelectivesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    clubs_clubs_coordinatorToprofile: z
      .lazy(
        () =>
          clubsUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInputObjectSchema
      )
      .optional(),
    clubs_clubs_cocoordinatorToprofile: z
      .lazy(
        () =>
          clubsUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInputObjectSchema
      )
      .optional(),
    institute_profile_instituteToinstitute: z
      .lazy(
        () =>
          instituteUpdateOneRequiredWithoutProfile_profile_instituteToinstituteNestedInputObjectSchema
      )
      .optional(),
    account: z
      .lazy(() => accountUpdateOneRequiredWithoutProfileNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const profileUpdateWithoutAnalyticsInputObjectSchema = Schema
