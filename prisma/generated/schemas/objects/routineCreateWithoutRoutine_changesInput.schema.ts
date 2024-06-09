import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateNestedOneWithoutRoutineInputObjectSchema } from "./coursesCreateNestedOneWithoutRoutineInput.schema"
import { instituteCreateNestedOneWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteCreateNestedOneWithoutRoutine_routine_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.routineCreateWithoutRoutine_changesInput> = z
  .object({
    id: z.string().optional(),
    course_code: z.string(),
    course_title: z.string(),
    prof: z.string(),
    type: z.string().optional(),
    day: z.number(),
    from: z.coerce.date(),
    to: z.coerce.date(),
    group: z.string().optional(),
    branch: z.string(),
    room: z.string(),
    semester: z.number(),
    compulsory: z.boolean().optional(),
    courses: z.lazy(
      () => coursesCreateNestedOneWithoutRoutineInputObjectSchema
    ),
    institute_routine_instituteToinstitute: z.lazy(
      () =>
        instituteCreateNestedOneWithoutRoutine_routine_instituteToinstituteInputObjectSchema
    ),
  })
  .strict()

export const routineCreateWithoutRoutine_changesInputObjectSchema = Schema
