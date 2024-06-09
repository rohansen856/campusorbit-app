import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.routine_changesUncheckedCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      date: z.coerce.date(),
      description: z.string().optional().nullable(),
      routine_id: z.string(),
    })
    .strict()

export const routine_changesUncheckedCreateWithoutAccountInputObjectSchema =
  Schema
