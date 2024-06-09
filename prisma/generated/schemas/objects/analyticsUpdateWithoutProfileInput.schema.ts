import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.analyticsUpdateWithoutProfileInput> = z
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
  })
  .strict()

export const analyticsUpdateWithoutProfileInputObjectSchema = Schema
