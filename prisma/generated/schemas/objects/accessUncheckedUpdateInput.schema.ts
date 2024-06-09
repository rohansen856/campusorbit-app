import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUncheckedUpdateManyWithoutAccessNestedInputObjectSchema } from "./accountUncheckedUpdateManyWithoutAccessNestedInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.accessUncheckedUpdateInput> = z
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
      .lazy(
        () => accountUncheckedUpdateManyWithoutAccessNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const accessUncheckedUpdateInputObjectSchema = Schema
