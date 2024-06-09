import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { analyticsCreateOrConnectWithoutProfileInputObjectSchema } from "./analyticsCreateOrConnectWithoutProfileInput.schema"
import { analyticsCreateWithoutProfileInputObjectSchema } from "./analyticsCreateWithoutProfileInput.schema"
import { analyticsUncheckedCreateWithoutProfileInputObjectSchema } from "./analyticsUncheckedCreateWithoutProfileInput.schema"
import { analyticsWhereUniqueInputObjectSchema } from "./analyticsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.analyticsUncheckedCreateNestedOneWithoutProfileInput> =
  z
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
      connect: z.lazy(() => analyticsWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const analyticsUncheckedCreateNestedOneWithoutProfileInputObjectSchema =
  Schema
