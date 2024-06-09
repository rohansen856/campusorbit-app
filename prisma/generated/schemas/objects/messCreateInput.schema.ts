import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateNestedOneWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteCreateNestedOneWithoutMess_mess_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.messCreateInput> = z
  .object({
    id: z.string().optional(),
    mess_no: z.number(),
    day: z.number(),
    breakfast: z.string(),
    lunch: z.string(),
    dinner: z.string(),
    institute_mess_instituteToinstitute: z.lazy(
      () =>
        instituteCreateNestedOneWithoutMess_mess_instituteToinstituteInputObjectSchema
    ),
  })
  .strict()

export const messCreateInputObjectSchema = Schema
