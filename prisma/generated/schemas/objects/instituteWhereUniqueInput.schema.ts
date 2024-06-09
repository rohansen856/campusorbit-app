import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.instituteWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    full_name: z.string().optional(),
    domain: z.string().optional(),
  })
  .strict()

export const instituteWhereUniqueInputObjectSchema = Schema
