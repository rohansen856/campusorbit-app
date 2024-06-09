import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteUpdateOneRequiredWithoutMess_mess_instituteToinstituteNestedInputObjectSchema } from "./instituteUpdateOneRequiredWithoutMess_mess_instituteToinstituteNestedInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.messUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mess_no: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    day: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    breakfast: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lunch: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    dinner: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    institute_mess_instituteToinstitute: z
      .lazy(
        () =>
          instituteUpdateOneRequiredWithoutMess_mess_instituteToinstituteNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const messUpdateInputObjectSchema = Schema
