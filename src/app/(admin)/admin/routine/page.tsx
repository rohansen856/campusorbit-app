"use client"

import { tasks } from "../data/tasks"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"

export default function RoutinePage() {
  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
