"use client"

import { Row } from "@tanstack/react-table"

import { EditTable } from "./edit-table"
import { routineSchema } from "./schema"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const routine = routineSchema.parse(row.original)

  return <EditTable data={routine} />
}
