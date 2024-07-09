import { db } from "@/lib/db"
import { ChartConfig } from "@/components/ui/chart"

import { PieChartComponent } from "./pie-chart"

// const chartData = [
//   { key: "cs", value: 275, fill: "var(--color-cs)" },
//   { key: "ec", value: 200, fill: "var(--color-ec)" },
//   { key: "sm", value: 287, fill: "var(--color-sm)" },
//   { key: "me", value: 173, fill: "var(--color-me)" },
// ]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  cs: {
    label: "CSE",
    color: "hsl(var(--chart-1))",
  },
  ec: {
    label: "ECE",
    color: "hsl(var(--chart-2))",
  },
  sm: {
    label: "SM",
    color: "hsl(var(--chart-3))",
  },
  me: {
    label: "ME",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export async function BranchwiseGraph() {
  const profiles = await db.profile.groupBy({
    by: ["branch"],
    _count: {
      branch: true,
    },
  })
  const chartData = profiles.map((profile) => ({
    key: profile.branch,
    value: profile._count.branch,
    fill: `var(--color-${profile.branch})`,
  }))

  return (
    <PieChartComponent
      title="Branch Distribution"
      description="users by their respective branch"
      chartData={chartData}
      chartConfig={chartConfig}
    />
  )
}
