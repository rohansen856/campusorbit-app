import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { analyticsUncheckedUpdateOneWithoutProfileNestedInputObjectSchema } from "./analyticsUncheckedUpdateOneWithoutProfileNestedInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { clubsUncheckedUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInputObjectSchema } from "./clubsUncheckedUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInput.schema"
import { clubsUncheckedUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInputObjectSchema } from "./clubsUncheckedUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateelectivesInputObjectSchema } from "./profileUpdateelectivesInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.profileUncheckedUpdateWithoutAccountInput> = z
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
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    institute: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
    analytics: z
      .lazy(
        () => analyticsUncheckedUpdateOneWithoutProfileNestedInputObjectSchema
      )
      .optional(),
    clubs_clubs_coordinatorToprofile: z
      .lazy(
        () =>
          clubsUncheckedUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInputObjectSchema
      )
      .optional(),
    clubs_clubs_cocoordinatorToprofile: z
      .lazy(
        () =>
          clubsUncheckedUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const profileUncheckedUpdateWithoutAccountInputObjectSchema = Schema
