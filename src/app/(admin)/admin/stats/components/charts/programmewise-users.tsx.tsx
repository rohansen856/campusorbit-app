import { db } from "@/lib/db"
import { ChartConfig } from "@/components/ui/chart"

import { PieChartComponent } from "./pie-chart"

const chartData = [
  { key: "btech", value: 275, fill: "var(--color-btech)" },
  { key: "mtech", value: 200, fill: "var(--color-mtech)" },
  { key: "phd", value: 287, fill: "var(--color-phd)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  btech: {
    label: "Btech",
    color: "hsl(var(--chart-1))",
  },
  mtech: {
    label: "Mtech",
    color: "hsl(var(--chart-2))",
  },
  phd: {
    label: "Phd",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export async function ProgrammewiseGraph() {
  const profiles = await db.profile.groupBy({
    by: ["programme"],
    _count: {
      programme: true,
    },
  })
  const chartData = profiles.map((profile) => ({
    key: profile.programme,
    value: profile._count.programme,
    fill: `var(--color-${profile.programme})`,
  }))

  return (
    <PieChartComponent
      title="Programme Distribution"
      description="users by their respective programme"
      chartData={chartData}
      chartConfig={chartConfig}
    />
  )
}
