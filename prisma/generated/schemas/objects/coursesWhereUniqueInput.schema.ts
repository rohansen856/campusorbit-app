import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.coursesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const coursesWhereUniqueInputObjectSchema = Schema
