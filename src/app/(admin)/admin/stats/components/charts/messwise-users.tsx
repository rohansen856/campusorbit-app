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
  1: {
    label: "Mess 1",
    color: "hsl(var(--chart-1))",
  },
  2: {
    label: "Mess 2",
    color: "hsl(var(--chart-2))",
  },
  3: {
    label: "Mess 3",
    color: "hsl(var(--chart-3))",
  },
  4: {
    label: "Mess 4",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export async function MesswiseGraph() {
  const profiles = await db.profile.groupBy({
    by: ["mess"],
    _count: {
      mess: true,
    },
  })
  const chartData = profiles.map((profile) => ({
    key: profile.mess,
    value: profile._count.mess,
    fill: `var(--color-${profile.mess})`,
  }))

  return (
    <PieChartComponent
      title="Year Distribution"
      description="users by their respective year"
      chartData={chartData}
      chartConfig={chartConfig}
    />
  )
}
