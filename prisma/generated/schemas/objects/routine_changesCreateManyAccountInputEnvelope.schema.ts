import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateManyAccountInputObjectSchema } from "./routine_changesCreateManyAccountInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateManyAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => routine_changesCreateManyAccountInputObjectSchema),
        z.lazy(() => routine_changesCreateManyAccountInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const routine_changesCreateManyAccountInputEnvelopeObjectSchema = Schema
