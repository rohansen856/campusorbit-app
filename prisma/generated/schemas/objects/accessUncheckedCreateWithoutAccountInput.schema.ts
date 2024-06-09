import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.accessUncheckedCreateWithoutAccountInput> = z
  .object({
    level: z.number(),
    details: z.string().optional().nullable(),
    domain: z.string().optional().nullable(),
  })
  .strict()

export const accessUncheckedCreateWithoutAccountInputObjectSchema = Schema
