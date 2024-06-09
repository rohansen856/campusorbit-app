import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateManyProfile_clubs_coordinatorToprofileInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            clubsCreateManyProfile_clubs_coordinatorToprofileInputObjectSchema
        ),
        z
          .lazy(
            () =>
              clubsCreateManyProfile_clubs_coordinatorToprofileInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelopeObjectSchema =
  Schema
