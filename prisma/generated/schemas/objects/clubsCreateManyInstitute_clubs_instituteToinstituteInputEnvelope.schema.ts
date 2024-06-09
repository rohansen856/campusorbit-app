import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateManyInstitute_clubs_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            clubsCreateManyInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
        z
          .lazy(
            () =>
              clubsCreateManyInstitute_clubs_instituteToinstituteInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelopeObjectSchema =
  Schema
