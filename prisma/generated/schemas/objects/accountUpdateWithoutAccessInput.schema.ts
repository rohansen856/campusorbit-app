import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInputObjectSchema } from "./instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateOneWithoutAccountNestedInputObjectSchema } from "./profileUpdateOneWithoutAccountNestedInput.schema"
import { routine_changesUpdateManyWithoutAccountNestedInputObjectSchema } from "./routine_changesUpdateManyWithoutAccountNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateWithoutAccessInput> = z
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
    institute_account_instituteToinstitute: z
      .lazy(
        () =>
          instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInputObjectSchema
      )
      .optional(),
    profile: z
      .lazy(() => profileUpdateOneWithoutAccountNestedInputObjectSchema)
      .optional(),
    routine_changes: z
      .lazy(
        () => routine_changesUpdateManyWithoutAccountNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const accountUpdateWithoutAccessInputObjectSchema = Schema
