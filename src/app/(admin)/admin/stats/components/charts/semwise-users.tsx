import { ChartConfig } from "@/components/ui/chart"

import { PieChartComponent } from "./pie-chart"

const chartData = [
  { key: "sem1", value: 275, fill: "var(--color-sem1)" },
  { key: "sem2", value: 200, fill: "var(--color-sem2)" },
  { key: "sem3", value: 287, fill: "var(--color-sem3)" },
  { key: "sem4", value: 173, fill: "var(--color-sem4)" },
  { key: "sem5", value: 190, fill: "var(--color-sem5)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  sem1: {
    label: "Sem1",
    color: "hsl(var(--chart-1))",
  },
  sem2: {
    label: "Sem2",
    color: "hsl(var(--chart-2))",
  },
  sem3: {
    label: "Sem3",
    color: "hsl(var(--chart-3))",
  },
  sem4: {
    label: "Sem4",
    color: "hsl(var(--chart-4))",
  },
  sem5: {
    label: "Sem5",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export async function SemwiseGraph() {
  return (
    <PieChartComponent
      title="Semester Distribution"
      description="users by their respective branch"
      chartData={chartData}
      chartConfig={chartConfig}
    />
  )
}
