"use client"

import { Row } from "@tanstack/react-table"

import { routineSchema } from "../data/schema"
import { EditTable } from "./edit-table"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const routine = routineSchema.parse(row.original)

  return <EditTable data={routine} />
}
