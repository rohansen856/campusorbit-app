import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.routineCreateManyInstitute_routine_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
      course_id: z.string(),
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
    })
    .strict()

export const routineCreateManyInstitute_routine_instituteToinstituteInputObjectSchema =
  Schema
