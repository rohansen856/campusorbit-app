import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { analyticsCreateWithoutProfileInputObjectSchema } from "./analyticsCreateWithoutProfileInput.schema"
import { analyticsUncheckedCreateWithoutProfileInputObjectSchema } from "./analyticsUncheckedCreateWithoutProfileInput.schema"
import { analyticsUncheckedUpdateWithoutProfileInputObjectSchema } from "./analyticsUncheckedUpdateWithoutProfileInput.schema"
import { analyticsUpdateWithoutProfileInputObjectSchema } from "./analyticsUpdateWithoutProfileInput.schema"

const Schema: z.ZodType<Prisma.analyticsUpsertWithoutProfileInput> = z
  .object({
    update: z.union([
      z.lazy(() => analyticsUpdateWithoutProfileInputObjectSchema),
      z.lazy(() => analyticsUncheckedUpdateWithoutProfileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => analyticsCreateWithoutProfileInputObjectSchema),
      z.lazy(() => analyticsUncheckedCreateWithoutProfileInputObjectSchema),
    ]),
  })
  .strict()

export const analyticsUpsertWithoutProfileInputObjectSchema = Schema
