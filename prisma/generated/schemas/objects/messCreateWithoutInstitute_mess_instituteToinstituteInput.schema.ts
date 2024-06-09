import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.messCreateWithoutInstitute_mess_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
      mess_no: z.number(),
      day: z.number(),
      breakfast: z.string(),
      lunch: z.string(),
      dinner: z.string(),
    })
    .strict()

export const messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema =
  Schema
