import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineUncheckedUpdateWithoutCoursesInputObjectSchema } from "./routineUncheckedUpdateWithoutCoursesInput.schema"
import { routineUpdateWithoutCoursesInputObjectSchema } from "./routineUpdateWithoutCoursesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateWithWhereUniqueWithoutCoursesInput> =
  z
    .object({
      where: z.lazy(() => routineWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => routineUpdateWithoutCoursesInputObjectSchema),
        z.lazy(() => routineUncheckedUpdateWithoutCoursesInputObjectSchema),
      ]),
    })
    .strict()

export const routineUpdateWithWhereUniqueWithoutCoursesInputObjectSchema =
  Schema
