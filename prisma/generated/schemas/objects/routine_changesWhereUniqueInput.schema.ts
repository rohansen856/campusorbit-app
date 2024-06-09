import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.routine_changesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const routine_changesWhereUniqueInputObjectSchema = Schema
