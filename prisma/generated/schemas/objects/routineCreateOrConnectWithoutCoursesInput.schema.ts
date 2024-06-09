import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateWithoutCoursesInputObjectSchema } from "./routineCreateWithoutCoursesInput.schema"
import { routineUncheckedCreateWithoutCoursesInputObjectSchema } from "./routineUncheckedCreateWithoutCoursesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineCreateOrConnectWithoutCoursesInput> = z
  .object({
    where: z.lazy(() => routineWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => routineCreateWithoutCoursesInputObjectSchema),
      z.lazy(() => routineUncheckedCreateWithoutCoursesInputObjectSchema),
    ]),
  })
  .strict()

export const routineCreateOrConnectWithoutCoursesInputObjectSchema = Schema
