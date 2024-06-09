import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUncheckedUpdateOneWithoutAccountNestedInputObjectSchema } from "./profileUncheckedUpdateOneWithoutAccountNestedInput.schema"
import { routine_changesUncheckedUpdateManyWithoutAccountNestedInputObjectSchema } from "./routine_changesUncheckedUpdateManyWithoutAccountNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.accountUncheckedUpdateWithoutAccessInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    institute: z
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
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    profile: z
      .lazy(
        () => profileUncheckedUpdateOneWithoutAccountNestedInputObjectSchema
      )
      .optional(),
    routine_changes: z
      .lazy(
        () =>
          routine_changesUncheckedUpdateManyWithoutAccountNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const accountUncheckedUpdateWithoutAccessInputObjectSchema = Schema
