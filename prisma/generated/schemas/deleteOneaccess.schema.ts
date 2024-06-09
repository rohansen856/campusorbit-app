import { z } from "zod"

import { accessWhereUniqueInputObjectSchema } from "./objects/accessWhereUniqueInput.schema"

export const accessDeleteOneSchema = z.object({
  where: accessWhereUniqueInputObjectSchema,
})
