import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.accessWhereUniqueInput> = z
  .object({
    level: z.number().optional(),
  })
  .strict()

export const accessWhereUniqueInputObjectSchema = Schema
