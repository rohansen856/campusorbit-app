import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessCreateOrConnectWithoutAccountInputObjectSchema } from "./accessCreateOrConnectWithoutAccountInput.schema"
import { accessCreateWithoutAccountInputObjectSchema } from "./accessCreateWithoutAccountInput.schema"
import { accessUncheckedCreateWithoutAccountInputObjectSchema } from "./accessUncheckedCreateWithoutAccountInput.schema"
import { accessWhereUniqueInputObjectSchema } from "./accessWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accessCreateNestedOneWithoutAccountInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => accessCreateWithoutAccountInputObjectSchema),
        z.lazy(() => accessUncheckedCreateWithoutAccountInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => accessCreateOrConnectWithoutAccountInputObjectSchema)
      .optional(),
    connect: z.lazy(() => accessWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const accessCreateNestedOneWithoutAccountInputObjectSchema = Schema
