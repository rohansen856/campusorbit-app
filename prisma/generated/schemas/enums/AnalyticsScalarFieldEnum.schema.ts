import { z } from "zod"

export const AnalyticsScalarFieldEnumSchema = z.enum([
  "user_id",
  "device",
  "fcm_token",
])
