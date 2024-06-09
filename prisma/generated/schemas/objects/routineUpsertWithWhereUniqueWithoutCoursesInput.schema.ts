import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateWithoutCoursesInputObjectSchema } from "./routineCreateWithoutCoursesInput.schema"
import { routineUncheckedCreateWithoutCoursesInputObjectSchema } from "./routineUncheckedCreateWithoutCoursesInput.schema"
import { routineUncheckedUpdateWithoutCoursesInputObjectSchema } from "./routineUncheckedUpdateWithoutCoursesInput.schema"
import { routineUpdateWithoutCoursesInputObjectSchema } from "./routineUpdateWithoutCoursesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUpsertWithWhereUniqueWithoutCoursesInput> =
  z
    .object({
      where: z.lazy(() => routineWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => routineUpdateWithoutCoursesInputObjectSchema),
        z.lazy(() => routineUncheckedUpdateWithoutCoursesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => routineCreateWithoutCoursesInputObjectSchema),
        z.lazy(() => routineUncheckedCreateWithoutCoursesInputObjectSchema),
      ]),
    })
    .strict()

export const routineUpsertWithWhereUniqueWithoutCoursesInputObjectSchema =
  Schema
