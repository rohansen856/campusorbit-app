import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateManyInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateManyInstitute_profile_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.profileCreateManyInstitute_profile_instituteToinstituteInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            profileCreateManyInstitute_profile_instituteToinstituteInputObjectSchema
        ),
        z
          .lazy(
            () =>
              profileCreateManyInstitute_profile_instituteToinstituteInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const profileCreateManyInstitute_profile_instituteToinstituteInputEnvelopeObjectSchema =
  Schema
