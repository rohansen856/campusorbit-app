import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateelectivesInputObjectSchema } from "./profileCreateelectivesInput.schema"

const Schema: z.ZodType<Prisma.profileCreateManyInstitute_profile_instituteToinstituteInput> =
  z
    .object({
      id: z.string(),
      username: z.string().optional().nullable(),
      full_name: z.string().optional().nullable(),
      image: z.string().optional().nullable(),
      semester: z.bigint(),
      branch: z.string(),
      group: z.string().optional().nullable(),
      programme: z.string(),
      year: z.bigint(),
      visibility: z.boolean().optional(),
      mess: z.number().optional().nullable(),
      electives: z
        .union([
          z.lazy(() => profileCreateelectivesInputObjectSchema),
          z.string().array(),
        ])
        .optional(),
    })
    .strict()

export const profileCreateManyInstitute_profile_instituteToinstituteInputObjectSchema =
  Schema
