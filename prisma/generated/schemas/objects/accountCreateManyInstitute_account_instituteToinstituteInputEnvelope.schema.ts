import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateManyInstitute_account_instituteToinstituteInputObjectSchema } from "./accountCreateManyInstitute_account_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.accountCreateManyInstitute_account_instituteToinstituteInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            accountCreateManyInstitute_account_instituteToinstituteInputObjectSchema
        ),
        z
          .lazy(
            () =>
              accountCreateManyInstitute_account_instituteToinstituteInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const accountCreateManyInstitute_account_instituteToinstituteInputEnvelopeObjectSchema =
  Schema
