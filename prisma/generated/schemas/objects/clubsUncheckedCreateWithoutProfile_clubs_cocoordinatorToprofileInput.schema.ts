import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      type: z.string(),
      field: z.string(),
      image: z.string().optional().nullable(),
      coordinator: z.string().optional().nullable(),
      institute: z.string(),
      members: z.bigint().optional(),
    })
    .strict()

export const clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
