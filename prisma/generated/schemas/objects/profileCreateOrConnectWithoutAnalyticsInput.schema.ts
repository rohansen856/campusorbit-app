import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutAnalyticsInputObjectSchema } from "./profileCreateWithoutAnalyticsInput.schema"
import { profileUncheckedCreateWithoutAnalyticsInputObjectSchema } from "./profileUncheckedCreateWithoutAnalyticsInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateOrConnectWithoutAnalyticsInput> = z
  .object({
    where: z.lazy(() => profileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => profileCreateWithoutAnalyticsInputObjectSchema),
      z.lazy(() => profileUncheckedCreateWithoutAnalyticsInputObjectSchema),
    ]),
  })
  .strict()

export const profileCreateOrConnectWithoutAnalyticsInputObjectSchema = Schema
