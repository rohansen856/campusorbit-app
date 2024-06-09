import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUpdateOneRequiredWithoutRoutine_changesNestedInputObjectSchema } from "./accountUpdateOneRequiredWithoutRoutine_changesNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUpdateWithoutRoutineInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    account: z
      .lazy(
        () =>
          accountUpdateOneRequiredWithoutRoutine_changesNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const routine_changesUpdateWithoutRoutineInputObjectSchema = Schema
