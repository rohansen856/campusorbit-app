import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateManyProfile_clubs_cocoordinatorToprofileInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            clubsCreateManyProfile_clubs_cocoordinatorToprofileInputObjectSchema
        ),
        z
          .lazy(
            () =>
              clubsCreateManyProfile_clubs_cocoordinatorToprofileInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelopeObjectSchema =
  Schema
