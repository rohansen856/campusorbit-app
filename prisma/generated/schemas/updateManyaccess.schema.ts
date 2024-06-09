import { z } from "zod"

import { accessUpdateManyMutationInputObjectSchema } from "./objects/accessUpdateManyMutationInput.schema"
import { accessWhereInputObjectSchema } from "./objects/accessWhereInput.schema"

export const accessUpdateManySchema = z.object({
  data: accessUpdateManyMutationInputObjectSchema,
  where: accessWhereInputObjectSchema.optional(),
})
