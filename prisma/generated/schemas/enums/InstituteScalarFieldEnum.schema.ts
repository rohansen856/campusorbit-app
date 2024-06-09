import { z } from "zod"

export const InstituteScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "full_name",
  "domain",
])
