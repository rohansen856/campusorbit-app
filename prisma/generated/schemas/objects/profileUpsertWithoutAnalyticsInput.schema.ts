import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutAnalyticsInputObjectSchema } from "./profileCreateWithoutAnalyticsInput.schema"
import { profileUncheckedCreateWithoutAnalyticsInputObjectSchema } from "./profileUncheckedCreateWithoutAnalyticsInput.schema"
import { profileUncheckedUpdateWithoutAnalyticsInputObjectSchema } from "./profileUncheckedUpdateWithoutAnalyticsInput.schema"
import { profileUpdateWithoutAnalyticsInputObjectSchema } from "./profileUpdateWithoutAnalyticsInput.schema"

const Schema: z.ZodType<Prisma.profileUpsertWithoutAnalyticsInput> = z
  .object({
    update: z.union([
      z.lazy(() => profileUpdateWithoutAnalyticsInputObjectSchema),
      z.lazy(() => profileUncheckedUpdateWithoutAnalyticsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => profileCreateWithoutAnalyticsInputObjectSchema),
      z.lazy(() => profileUncheckedCreateWithoutAnalyticsInputObjectSchema),
    ]),
  })
  .strict()

export const profileUpsertWithoutAnalyticsInputObjectSchema = Schema
