import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountScalarWhereInputObjectSchema } from "./accountScalarWhereInput.schema"
import { accountUncheckedUpdateManyWithoutAccountInputObjectSchema } from "./accountUncheckedUpdateManyWithoutAccountInput.schema"
import { accountUpdateManyMutationInputObjectSchema } from "./accountUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateManyWithWhereWithoutAccessInput> = z
  .object({
    where: z.lazy(() => accountScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => accountUpdateManyMutationInputObjectSchema),
      z.lazy(() => accountUncheckedUpdateManyWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const accountUpdateManyWithWhereWithoutAccessInputObjectSchema = Schema
