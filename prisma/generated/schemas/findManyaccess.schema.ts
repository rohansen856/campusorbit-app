import { z } from "zod"

import { accessScalarFieldEnumSchema } from "./enums/accessScalarFieldEnum.schema"
import { accessOrderByWithRelationInputObjectSchema } from "./objects/accessOrderByWithRelationInput.schema"
import { accessWhereInputObjectSchema } from "./objects/accessWhereInput.schema"
import { accessWhereUniqueInputObjectSchema } from "./objects/accessWhereUniqueInput.schema"

export const accessFindManySchema = z.object({
  orderBy: z
    .union([
      accessOrderByWithRelationInputObjectSchema,
      accessOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: accessWhereInputObjectSchema.optional(),
  cursor: accessWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(accessScalarFieldEnumSchema).optional(),
})
