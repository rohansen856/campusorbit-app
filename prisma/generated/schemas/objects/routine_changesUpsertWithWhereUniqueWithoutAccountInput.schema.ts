import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateWithoutAccountInputObjectSchema } from "./routine_changesCreateWithoutAccountInput.schema"
import { routine_changesUncheckedCreateWithoutAccountInputObjectSchema } from "./routine_changesUncheckedCreateWithoutAccountInput.schema"
import { routine_changesUncheckedUpdateWithoutAccountInputObjectSchema } from "./routine_changesUncheckedUpdateWithoutAccountInput.schema"
import { routine_changesUpdateWithoutAccountInputObjectSchema } from "./routine_changesUpdateWithoutAccountInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => routine_changesUpdateWithoutAccountInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedUpdateWithoutAccountInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => routine_changesCreateWithoutAccountInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedCreateWithoutAccountInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routine_changesUpsertWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema
