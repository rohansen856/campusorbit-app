import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessCreateWithoutAccountInputObjectSchema } from "./accessCreateWithoutAccountInput.schema"
import { accessUncheckedCreateWithoutAccountInputObjectSchema } from "./accessUncheckedCreateWithoutAccountInput.schema"
import { accessUncheckedUpdateWithoutAccountInputObjectSchema } from "./accessUncheckedUpdateWithoutAccountInput.schema"
import { accessUpdateWithoutAccountInputObjectSchema } from "./accessUpdateWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.accessUpsertWithoutAccountInput> = z
  .object({
    update: z.union([
      z.lazy(() => accessUpdateWithoutAccountInputObjectSchema),
      z.lazy(() => accessUncheckedUpdateWithoutAccountInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => accessCreateWithoutAccountInputObjectSchema),
      z.lazy(() => accessUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const accessUpsertWithoutAccountInputObjectSchema = Schema
