import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messCreateManyInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateManyInstitute_mess_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.messCreateManyInstitute_mess_instituteToinstituteInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            messCreateManyInstitute_mess_instituteToinstituteInputObjectSchema
        ),
        z
          .lazy(
            () =>
              messCreateManyInstitute_mess_instituteToinstituteInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const messCreateManyInstitute_mess_instituteToinstituteInputEnvelopeObjectSchema =
  Schema
