import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateManyAccountInputEnvelopeObjectSchema } from "./routine_changesCreateManyAccountInputEnvelope.schema"
import { routine_changesCreateOrConnectWithoutAccountInputObjectSchema } from "./routine_changesCreateOrConnectWithoutAccountInput.schema"
import { routine_changesCreateWithoutAccountInputObjectSchema } from "./routine_changesCreateWithoutAccountInput.schema"
import { routine_changesUncheckedCreateWithoutAccountInputObjectSchema } from "./routine_changesUncheckedCreateWithoutAccountInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUncheckedCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => routine_changesCreateWithoutAccountInputObjectSchema),
          z
            .lazy(() => routine_changesCreateWithoutAccountInputObjectSchema)
            .array(),
          z.lazy(
            () => routine_changesUncheckedCreateWithoutAccountInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUncheckedCreateWithoutAccountInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => routine_changesCreateOrConnectWithoutAccountInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesCreateOrConnectWithoutAccountInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => routine_changesCreateManyAccountInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const routine_changesUncheckedCreateNestedManyWithoutAccountInputObjectSchema =
  Schema
