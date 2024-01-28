"use client"

import * as React from "react"
import { ModificationsSchema, RoutineSchema } from "@/types"
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { BranchFilter, DayFilter, YearFilter } from "./rotine-filters"
import { toast } from "./ui/use-toast"

export function DataTableDemo({
    routine = [],
    mods = [],
}: {
    routine: RoutineSchema[]
    mods: ModificationsSchema[]
}) {
    let data: RoutineSchema[] = []

    const columns: ColumnDef<RoutineSchema>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "branch",
            header: "Branch",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("branch")}</div>
            ),
        },
        {
            accessorKey: "semester",
            header: "Semester",
            cell: ({ row }) => {
                const sem = row.original.sem

                return <div>{sem}</div>
            },
        },
        {
            accessorKey: "code",
            header: "Code",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("code")}</div>
            ),
        },
        {
            accessorKey: "proffesor",
            header: "Professor",
            cell: ({ row }) => (
                <div className="capitalize">{row.original.prof}</div>
            ),
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("type")}</div>
            ),
        },
        {
            accessorKey: "day",
            header: "Day",
            cell: ({ row }) => (
                <div className="capitalize">{row.original.day}</div>
            ),
        },
        {
            accessorKey: "room",
            header: "Room",
            cell: ({ row }) => (
                <div className="capitalize">{row.original.room}</div>
            ),
        },
        {
            accessorKey: "timing",
            header: "Timing",
            cell: ({ row }) => (
                <div className="capitalize">
                    {(row.original.from || 0) / 100}:00 -{" "}
                    {(row.original.to || 0) / 100}:00
                </div>
            ),
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const lecture = row.original

                async function markChanged(
                    status: "cancelled" | "rescheduled"
                ) {
                    try {
                        const response = await axios.post(
                            `/api/routine/${lecture.id}`,
                            {
                                status,
                            }
                        )
                        if (response.status === 200)
                            return toast({
                                title: "Routine updated successfully.",
                                description:
                                    "the class has been marked cancelled.",
                                variant: "default",
                            })
                        return toast({
                            title: "Operation failed.",
                            description: "Failed to update. please try again",
                            variant: "destructive",
                        })
                    } catch (err) {
                        return toast({
                            title: "Something went wrong.",
                            description:
                                "Something unexpected happened. Please try again later.",
                            variant: "destructive",
                        })
                    }
                }

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(lecture.id)
                                }
                            >
                                Copy class ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => markChanged("cancelled")}
                                disabled={mods.some(
                                    (item) => item.classId === lecture.id
                                )}
                            >
                                <span className="text-red-700">
                                    {" "}
                                    Mark Cancelled
                                </span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => markChanged("rescheduled")}
                                disabled={mods.some(
                                    (item) => item.classId === lecture.id
                                )}
                            >
                                Reschedule
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    data = routine

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-y-2 py-4 md:flex-row">
                <Input
                    placeholder="Filter classes..."
                    value={
                        (table.getColumn("code")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("code")
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full max-w-sm md:ml-auto md:w-auto"
                        >
                            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="mx-5 flex space-x-2">
                    <YearFilter />
                    <BranchFilter />
                    <DayFilter />
                </div>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => {
                                        const index = mods.findIndex(
                                            (item) =>
                                                item.classId === row.original.id
                                        )
                                        return (
                                            <TableCell
                                                key={cell.id}
                                                className={
                                                    index >= 0
                                                        ? mods[index].status ==
                                                          "cancelled"
                                                            ? "bg-red-500"
                                                            : "bg-blue-500"
                                                        : ""
                                                }
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
