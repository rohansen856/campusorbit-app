import { db } from "@/lib/db"

import { VisitsChart } from "./charts/area-chart"
import { BranchwiseGraph } from "./charts/branchwise-users"
import { MesswiseGraph } from "./charts/messwise-users"
import { ProgrammewiseGraph } from "./charts/programmewise-users.tsx"
import { SemwiseGraph } from "./charts/semwise-users"
import { ViewsGraph } from "./charts/views-graph"

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
        <MesswiseGraph />
      </div>
      <ViewsGraph />
    </section>
  )
}
