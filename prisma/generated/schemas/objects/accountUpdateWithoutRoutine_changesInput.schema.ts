import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessUpdateOneRequiredWithoutAccountNestedInputObjectSchema } from "./accessUpdateOneRequiredWithoutAccountNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInputObjectSchema } from "./instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateOneWithoutAccountNestedInputObjectSchema } from "./profileUpdateOneWithoutAccountNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateWithoutRoutine_changesInput> = z
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
    access: z
      .lazy(() => accessUpdateOneRequiredWithoutAccountNestedInputObjectSchema)
      .optional(),
    institute_account_instituteToinstitute: z
      .lazy(
        () =>
          instituteUpdateOneRequiredWithoutAccount_account_instituteToinstituteNestedInputObjectSchema
      )
      .optional(),
    profile: z
      .lazy(() => profileUpdateOneWithoutAccountNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const accountUpdateWithoutRoutine_changesInputObjectSchema = Schema
