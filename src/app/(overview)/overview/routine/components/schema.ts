// export type Task = z.infer<typeof taskSchema>

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"
import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const routineSchema = z.object({
  id: z.string(),
  institute: z.string(),
  type: z.string(),
  from: z.string(),
  to: z.string(),
  semester: z.number(),
  branch: z.string(),
  group: z.string(),
  courseCode: z.string(),
  courseTitle: z.string(),
  courseId: z.string(),
  prof: z.string(),
  day: z.number(),
  room: z.string(),
})
// export const taskSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   status: z.string(),
//   label: z.string(),
//   priority: z.string(),
// })

export type Routine = z.infer<typeof routineSchema>

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const branches = [
  {
    value: "cs",
    label: "CS",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "ec",
    label: "EC",
    icon: CircleIcon,
  },
  {
    value: "me",
    label: "ME",
    icon: StopwatchIcon,
  },
  {
    value: "sm",
    label: "SM",
    icon: CheckCircledIcon,
  },
]

export const days = [
  {
    label: "1",
    value: "1",
    icon: ArrowRightIcon,
  },
  {
    label: "2",
    value: "2",
    icon: ArrowRightIcon,
  },
  {
    label: "3",
    value: "3",
    icon: ArrowRightIcon,
  },
  {
    label: "4",
    value: "4",
    icon: ArrowRightIcon,
  },
  {
    label: "5",
    value: "5",
    icon: ArrowRightIcon,
  },
]
