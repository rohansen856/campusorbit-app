import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { analyticsCreateWithoutProfileInputObjectSchema } from "./analyticsCreateWithoutProfileInput.schema"
import { analyticsUncheckedCreateWithoutProfileInputObjectSchema } from "./analyticsUncheckedCreateWithoutProfileInput.schema"
import { analyticsWhereUniqueInputObjectSchema } from "./analyticsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.analyticsCreateOrConnectWithoutProfileInput> = z
  .object({
    where: z.lazy(() => analyticsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => analyticsCreateWithoutProfileInputObjectSchema),
      z.lazy(() => analyticsUncheckedCreateWithoutProfileInputObjectSchema),
    ]),
  })
  .strict()

export const analyticsCreateOrConnectWithoutProfileInputObjectSchema = Schema
