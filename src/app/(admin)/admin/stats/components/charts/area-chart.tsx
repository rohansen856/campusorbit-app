"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
  dev: {
    label: "Dev",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

interface VisitsChartProps extends React.HTMLProps<typeof Card> {
  chartData: { key: string | number; visitors: number; dev: number }[]
}

export function VisitsChart({ chartData, ...props }: VisitsChartProps) {
  const filteredData = chartData

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[250px] w-full"
    >
      <AreaChart data={filteredData}>
        <defs>
          <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-visitors)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-visitors)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillDev" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-dev)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-dev)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="key"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(visitors) => {
            return `${((visitors as number) - 6).toString()}`
          }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={(visitors) => {
                return visitors
              }}
              indicator="dot"
            />
          }
        />
        <Area
          dataKey="dev"
          type="natural"
          fill="url(#fillDev)"
          stroke="var(--color-dev)"
          stackId="a"
        />
        <Area
          dataKey="visitors"
          type="natural"
          fill="url(#fillVisitors)"
          stroke="var(--color-visitors)"
          stackId="a"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  )
}
