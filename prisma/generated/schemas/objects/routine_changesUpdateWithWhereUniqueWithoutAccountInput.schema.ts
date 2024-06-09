import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesUncheckedUpdateWithoutAccountInputObjectSchema } from "./routine_changesUncheckedUpdateWithoutAccountInput.schema"
import { routine_changesUpdateWithoutAccountInputObjectSchema } from "./routine_changesUpdateWithoutAccountInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => routine_changesUpdateWithoutAccountInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedUpdateWithoutAccountInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routine_changesUpdateWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema
