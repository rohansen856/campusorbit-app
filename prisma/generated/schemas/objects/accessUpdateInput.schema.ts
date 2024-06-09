import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUpdateManyWithoutAccessNestedInputObjectSchema } from "./accountUpdateManyWithoutAccessNestedInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.accessUpdateInput> = z
  .object({
    level: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    details: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    domain: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    account: z
      .lazy(() => accountUpdateManyWithoutAccessNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const accessUpdateInputObjectSchema = Schema
