import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutAnalyticsInputObjectSchema } from "./profileCreateOrConnectWithoutAnalyticsInput.schema"
import { profileCreateWithoutAnalyticsInputObjectSchema } from "./profileCreateWithoutAnalyticsInput.schema"
import { profileUncheckedCreateWithoutAnalyticsInputObjectSchema } from "./profileUncheckedCreateWithoutAnalyticsInput.schema"
import { profileUncheckedUpdateWithoutAnalyticsInputObjectSchema } from "./profileUncheckedUpdateWithoutAnalyticsInput.schema"
import { profileUpdateWithoutAnalyticsInputObjectSchema } from "./profileUpdateWithoutAnalyticsInput.schema"
import { profileUpsertWithoutAnalyticsInputObjectSchema } from "./profileUpsertWithoutAnalyticsInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUpdateOneRequiredWithoutAnalyticsNestedInput> =
  z
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
      upsert: z
        .lazy(() => profileUpsertWithoutAnalyticsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => profileUpdateWithoutAnalyticsInputObjectSchema),
          z.lazy(() => profileUncheckedUpdateWithoutAnalyticsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const profileUpdateOneRequiredWithoutAnalyticsNestedInputObjectSchema =
  Schema
