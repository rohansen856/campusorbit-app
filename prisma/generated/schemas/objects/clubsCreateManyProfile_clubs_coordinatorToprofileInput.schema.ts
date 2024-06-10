import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.clubsCreateManyProfile_clubs_coordinatorToprofileInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      type: z.string(),
      field: z.string(),
      image: z.string().optional().nullable(),
      cocoordinator: z.string().optional().nullable(),
      institute: z.string(),
      members: z.number().optional(),
    })
    .strict()

export const clubsCreateManyProfile_clubs_coordinatorToprofileInputObjectSchema =
  Schema
