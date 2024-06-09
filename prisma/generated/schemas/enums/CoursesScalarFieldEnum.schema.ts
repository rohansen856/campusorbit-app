import { z } from "zod"

export const CoursesScalarFieldEnumSchema = z.enum([
  "id",
  "institute",
  "course_code",
  "course_title",
  "theory",
  "lab",
  "type",
  "credits",
  "semester",
  "branch",
  "drive_link",
])
