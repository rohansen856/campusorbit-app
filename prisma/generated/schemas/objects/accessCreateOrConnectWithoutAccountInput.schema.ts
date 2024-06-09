import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessCreateWithoutAccountInputObjectSchema } from "./accessCreateWithoutAccountInput.schema"
import { accessUncheckedCreateWithoutAccountInputObjectSchema } from "./accessUncheckedCreateWithoutAccountInput.schema"
import { accessWhereUniqueInputObjectSchema } from "./accessWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accessCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => accessWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => accessCreateWithoutAccountInputObjectSchema),
      z.lazy(() => accessUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const accessCreateOrConnectWithoutAccountInputObjectSchema = Schema
