import { z } from "zod"

import { accessWhereUniqueInputObjectSchema } from "./objects/accessWhereUniqueInput.schema"

export const accessFindUniqueSchema = z.object({
  where: accessWhereUniqueInputObjectSchema,
})
