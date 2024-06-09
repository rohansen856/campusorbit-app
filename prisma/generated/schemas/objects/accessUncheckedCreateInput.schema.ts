import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUncheckedCreateNestedManyWithoutAccessInputObjectSchema } from "./accountUncheckedCreateNestedManyWithoutAccessInput.schema"

const Schema: z.ZodType<Prisma.accessUncheckedCreateInput> = z
  .object({
    level: z.number(),
    details: z.string().optional().nullable(),
    domain: z.string().optional().nullable(),
    account: z
      .lazy(
        () => accountUncheckedCreateNestedManyWithoutAccessInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const accessUncheckedCreateInputObjectSchema = Schema
