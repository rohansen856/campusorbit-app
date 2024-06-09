import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateOneRequiredWithoutAnalyticsNestedInputObjectSchema } from "./profileUpdateOneRequiredWithoutAnalyticsNestedInput.schema"

const Schema: z.ZodType<Prisma.analyticsUpdateInput> = z
  .object({
    device: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    fcm_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    profile: z
      .lazy(
        () => profileUpdateOneRequiredWithoutAnalyticsNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const analyticsUpdateInputObjectSchema = Schema
