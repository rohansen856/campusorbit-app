import { db } from "@/lib/db"

import { BranchwiseGraph } from "./charts/branchwise-users"
import { PieChartComponent } from "./charts/pie-chart"
import { ProgrammewiseGraph } from "./charts/programmewise-users.tsx"
import { SemwiseGraph } from "./charts/semwise-users"
import { VisitsChart } from "./charts/views-chart"

export async function AnalyticsCharts() {
  return (
    <section
      id="graphs"
      className="flex flex-col justify-center items-center flex-wrap w-full gap-4 px-8"
    >
      <div className="flex w-full justify-center lg:justify-between items-center flex-wrap gap-4">
        <SemwiseGraph />
        <BranchwiseGraph />
        <ProgrammewiseGraph />
        <ProgrammewiseGraph />
      </div>
      <div className="w-full">
        <VisitsChart />
      </div>
    </section>
  )
}
