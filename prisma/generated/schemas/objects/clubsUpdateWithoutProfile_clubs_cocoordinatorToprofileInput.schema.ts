import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BigIntFieldUpdateOperationsInputObjectSchema } from "./BigIntFieldUpdateOperationsInput.schema"
import { instituteUpdateOneRequiredWithoutClubs_clubs_instituteToinstituteNestedInputObjectSchema } from "./instituteUpdateOneRequiredWithoutClubs_clubs_instituteToinstituteNestedInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateOneWithoutClubs_clubs_coordinatorToprofileNestedInputObjectSchema } from "./profileUpdateOneWithoutClubs_clubs_coordinatorToprofileNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInput> =
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
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      field: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      members: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      profile_clubs_coordinatorToprofile: z
        .lazy(
          () =>
            profileUpdateOneWithoutClubs_clubs_coordinatorToprofileNestedInputObjectSchema
        )
        .optional(),
      institute_clubs_instituteToinstitute: z
        .lazy(
          () =>
            instituteUpdateOneRequiredWithoutClubs_clubs_instituteToinstituteNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
