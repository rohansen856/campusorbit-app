import { z } from "zod"

export const ClubsScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "type",
  "field",
  "image",
  "coordinator",
  "cocoordinator",
  "institute",
  "members",
])
