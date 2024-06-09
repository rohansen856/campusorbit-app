import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.accessCreateWithoutAccountInput> = z
  .object({
    level: z.number(),
    details: z.string().optional().nullable(),
    domain: z.string().optional().nullable(),
  })
  .strict()

export const accessCreateWithoutAccountInputObjectSchema = Schema
