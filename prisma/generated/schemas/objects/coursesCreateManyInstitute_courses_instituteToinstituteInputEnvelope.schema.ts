import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateManyInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateManyInstitute_courses_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            coursesCreateManyInstitute_courses_instituteToinstituteInputObjectSchema
        ),
        z
          .lazy(
            () =>
              coursesCreateManyInstitute_courses_instituteToinstituteInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelopeObjectSchema =
  Schema
