import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesScalarWhereInputObjectSchema } from "./coursesScalarWhereInput.schema"
import { coursesUncheckedUpdateManyWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedUpdateManyWithoutCourses_courses_instituteToinstituteInput.schema"
import { coursesUpdateManyMutationInputObjectSchema } from "./coursesUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.coursesUpdateManyWithWhereWithoutInstitute_courses_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => coursesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => coursesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            coursesUncheckedUpdateManyWithoutCourses_courses_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const coursesUpdateManyWithWhereWithoutInstitute_courses_instituteToinstituteInputObjectSchema =
  Schema
