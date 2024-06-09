import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateNestedOneWithoutRoutineInputObjectSchema } from "./coursesCreateNestedOneWithoutRoutineInput.schema"
import { routine_changesCreateNestedManyWithoutRoutineInputObjectSchema } from "./routine_changesCreateNestedManyWithoutRoutineInput.schema"

const Schema: z.ZodType<Prisma.routineCreateWithoutInstitute_routine_instituteToinstituteInput> =
  z
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
      routine_changes: z
        .lazy(
          () => routine_changesCreateNestedManyWithoutRoutineInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema =
  Schema
