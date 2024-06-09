import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateWithoutAccountInputObjectSchema } from "./routine_changesCreateWithoutAccountInput.schema"
import { routine_changesUncheckedCreateWithoutAccountInputObjectSchema } from "./routine_changesUncheckedCreateWithoutAccountInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => routine_changesCreateWithoutAccountInputObjectSchema),
        z.lazy(
          () => routine_changesUncheckedCreateWithoutAccountInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routine_changesCreateOrConnectWithoutAccountInputObjectSchema =
  Schema
