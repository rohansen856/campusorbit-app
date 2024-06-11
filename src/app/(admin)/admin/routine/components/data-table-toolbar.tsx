import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableViewOptions } from "../components/data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { priorities, statuses } from "./filters"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
        <Input
          placeholder="Filter by title..."
          value={
            (table.getColumn("course_title")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("course_title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <div className="flex gap-x-2">
          {table.getColumn("compulsory") && (
            <DataTableFacetedFilter
              column={table.getColumn("compulsory")}
              title="Course Type"
              options={statuses}
            />
          )}
          {table.getColumn("prof") && (
            <DataTableFacetedFilter
              column={table.getColumn("prof")}
              title="Prof"
              options={priorities}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 size-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
