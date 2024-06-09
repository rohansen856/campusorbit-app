import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutAnalyticsInputObjectSchema } from "./profileCreateOrConnectWithoutAnalyticsInput.schema"
import { profileCreateWithoutAnalyticsInputObjectSchema } from "./profileCreateWithoutAnalyticsInput.schema"
import { profileUncheckedCreateWithoutAnalyticsInputObjectSchema } from "./profileUncheckedCreateWithoutAnalyticsInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateNestedOneWithoutAnalyticsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => profileCreateWithoutAnalyticsInputObjectSchema),
        z.lazy(() => profileUncheckedCreateWithoutAnalyticsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => profileCreateOrConnectWithoutAnalyticsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const profileCreateNestedOneWithoutAnalyticsInputObjectSchema = Schema
