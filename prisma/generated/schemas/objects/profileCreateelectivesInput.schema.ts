import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.profileCreateelectivesInput> = z
  .object({
    set: z.string().array(),
  })
  .strict()

export const profileCreateelectivesInputObjectSchema = Schema
