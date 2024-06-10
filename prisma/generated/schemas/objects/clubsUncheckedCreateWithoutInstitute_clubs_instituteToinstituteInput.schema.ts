import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string(),
      type: z.string(),
      field: z.string(),
      image: z.string().optional().nullable(),
      coordinator: z.string().optional().nullable(),
      cocoordinator: z.string().optional().nullable(),
      members: z.number().optional(),
    })
    .strict()

export const clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
