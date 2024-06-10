import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInput> =
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

export const clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema =
  Schema
