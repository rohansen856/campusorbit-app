import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateManyRoutineInputObjectSchema } from "./routine_changesCreateManyRoutineInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateManyRoutineInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => routine_changesCreateManyRoutineInputObjectSchema),
        z.lazy(() => routine_changesCreateManyRoutineInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const routine_changesCreateManyRoutineInputEnvelopeObjectSchema = Schema
