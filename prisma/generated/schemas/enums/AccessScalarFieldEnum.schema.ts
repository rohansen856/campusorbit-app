import { z } from "zod"

export const AccessScalarFieldEnumSchema = z.enum([
  "level",
  "details",
  "domain",
])
