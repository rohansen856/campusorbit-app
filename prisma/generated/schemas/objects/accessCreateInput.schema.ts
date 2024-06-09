import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateNestedManyWithoutAccessInputObjectSchema } from "./accountCreateNestedManyWithoutAccessInput.schema"

const Schema: z.ZodType<Prisma.accessCreateInput> = z
  .object({
    level: z.number(),
    details: z.string().optional().nullable(),
    domain: z.string().optional().nullable(),
    account: z
      .lazy(() => accountCreateNestedManyWithoutAccessInputObjectSchema)
      .optional(),
  })
  .strict()

export const accessCreateInputObjectSchema = Schema
