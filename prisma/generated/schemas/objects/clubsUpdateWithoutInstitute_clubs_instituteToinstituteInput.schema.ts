import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BigIntFieldUpdateOperationsInputObjectSchema } from "./BigIntFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateOneWithoutClubs_clubs_cocoordinatorToprofileNestedInputObjectSchema } from "./profileUpdateOneWithoutClubs_clubs_cocoordinatorToprofileNestedInput.schema"
import { profileUpdateOneWithoutClubs_clubs_coordinatorToprofileNestedInputObjectSchema } from "./profileUpdateOneWithoutClubs_clubs_coordinatorToprofileNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateWithoutInstitute_clubs_instituteToinstituteInput> =
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
      profile_clubs_cocoordinatorToprofile: z
        .lazy(
          () =>
            profileUpdateOneWithoutClubs_clubs_cocoordinatorToprofileNestedInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const clubsUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
