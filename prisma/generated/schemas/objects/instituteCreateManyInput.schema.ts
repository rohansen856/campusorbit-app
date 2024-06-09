import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.instituteCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    full_name: z.string(),
    domain: z.string(),
  })
  .strict()

export const instituteCreateManyInputObjectSchema = Schema
