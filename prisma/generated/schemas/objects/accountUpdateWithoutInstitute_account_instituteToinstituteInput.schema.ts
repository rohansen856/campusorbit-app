import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessUpdateOneRequiredWithoutAccountNestedInputObjectSchema } from "./accessUpdateOneRequiredWithoutAccountNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { profileUpdateOneWithoutAccountNestedInputObjectSchema } from "./profileUpdateOneWithoutAccountNestedInput.schema"
import { routine_changesUpdateManyWithoutAccountNestedInputObjectSchema } from "./routine_changesUpdateManyWithoutAccountNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateWithoutInstitute_account_instituteToinstituteInput> =
  z
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
        .lazy(
          () => accessUpdateOneRequiredWithoutAccountNestedInputObjectSchema
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

export const accountUpdateWithoutInstitute_account_instituteToinstituteInputObjectSchema =
  Schema
