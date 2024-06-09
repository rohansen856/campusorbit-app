import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { analyticsCreateOrConnectWithoutProfileInputObjectSchema } from "./analyticsCreateOrConnectWithoutProfileInput.schema"
import { analyticsCreateWithoutProfileInputObjectSchema } from "./analyticsCreateWithoutProfileInput.schema"
import { analyticsUncheckedCreateWithoutProfileInputObjectSchema } from "./analyticsUncheckedCreateWithoutProfileInput.schema"
import { analyticsUncheckedUpdateWithoutProfileInputObjectSchema } from "./analyticsUncheckedUpdateWithoutProfileInput.schema"
import { analyticsUpdateWithoutProfileInputObjectSchema } from "./analyticsUpdateWithoutProfileInput.schema"
import { analyticsUpsertWithoutProfileInputObjectSchema } from "./analyticsUpsertWithoutProfileInput.schema"
import { analyticsWhereUniqueInputObjectSchema } from "./analyticsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.analyticsUpdateOneWithoutProfileNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => analyticsCreateWithoutProfileInputObjectSchema),
        z.lazy(() => analyticsUncheckedCreateWithoutProfileInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => analyticsCreateOrConnectWithoutProfileInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => analyticsUpsertWithoutProfileInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => analyticsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => analyticsUpdateWithoutProfileInputObjectSchema),
        z.lazy(() => analyticsUncheckedUpdateWithoutProfileInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const analyticsUpdateOneWithoutProfileNestedInputObjectSchema = Schema
