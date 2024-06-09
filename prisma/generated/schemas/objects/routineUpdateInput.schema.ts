import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { coursesUpdateOneRequiredWithoutRoutineNestedInputObjectSchema } from "./coursesUpdateOneRequiredWithoutRoutineNestedInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { instituteUpdateOneRequiredWithoutRoutine_routine_instituteToinstituteNestedInputObjectSchema } from "./instituteUpdateOneRequiredWithoutRoutine_routine_instituteToinstituteNestedInput.schema"
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema"
import { routine_changesUpdateManyWithoutRoutineNestedInputObjectSchema } from "./routine_changesUpdateManyWithoutRoutineNestedInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    course_code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    course_title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    prof: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    day: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    from: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    to: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    group: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    branch: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    room: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    semester: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    compulsory: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    courses: z
      .lazy(() => coursesUpdateOneRequiredWithoutRoutineNestedInputObjectSchema)
      .optional(),
    institute_routine_instituteToinstitute: z
      .lazy(
        () =>
          instituteUpdateOneRequiredWithoutRoutine_routine_instituteToinstituteNestedInputObjectSchema
      )
      .optional(),
    routine_changes: z
      .lazy(
        () => routine_changesUpdateManyWithoutRoutineNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const routineUpdateInputObjectSchema = Schema
