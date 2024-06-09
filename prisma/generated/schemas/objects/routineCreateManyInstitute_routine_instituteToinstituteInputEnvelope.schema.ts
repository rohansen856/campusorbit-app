import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateManyInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateManyInstitute_routine_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.routineCreateManyInstitute_routine_instituteToinstituteInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            routineCreateManyInstitute_routine_instituteToinstituteInputObjectSchema
        ),
        z
          .lazy(
            () =>
              routineCreateManyInstitute_routine_instituteToinstituteInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const routineCreateManyInstitute_routine_instituteToinstituteInputEnvelopeObjectSchema =
  Schema
