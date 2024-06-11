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

export const labels = [
  {
    value: "THEORY",
    label: "Theory",
  },
  {
    value: "LAB",
    label: "Lab",
  },
]

export const statuses = [
  {
    value: "compulsory",
    label: "Compulsory",
    icon: CircleIcon,
  },
  {
    value: "elective",
    label: "Elective",
    icon: StopwatchIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
