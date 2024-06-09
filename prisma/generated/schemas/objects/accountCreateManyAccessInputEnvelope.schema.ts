import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateManyAccessInputObjectSchema } from "./accountCreateManyAccessInput.schema"

const Schema: z.ZodType<Prisma.accountCreateManyAccessInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => accountCreateManyAccessInputObjectSchema),
      z.lazy(() => accountCreateManyAccessInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const accountCreateManyAccessInputEnvelopeObjectSchema = Schema
