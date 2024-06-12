"use client"

import { useRoutineChanges } from "@/states/routine-state"
import { routine } from "@prisma/client"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [{ changes }, setChanges] = useRoutineChanges()
  const routine = row.original as routine

  async function applyModification(modification: "cancelled" | "rescheduled") {
    try {
      const { status } = await axios.post("/api/admin/routine", {
        modification,
        routineId: routine.id,
      })
      if (status !== 204)
        return toast({
          title: "Error updating class status!",
          description:
            "We were unable to process the request. Please try again later.",
          variant: "destructive",
        })

      setChanges({
        changes: [
          ...changes,
          { routine_id: routine.id, description: modification },
        ],
      })

      return toast({
        title: "Successfully updated status.",
        variant: "default",
        color: "#ff0000",
      })
    } catch (error) {
      return toast({
        title: "Error updating class status!",
        description:
          "We were unable to process the request. Please try again later.",
        variant: "destructive",
      })
    }
  }

  async function cancelModification() {
    try {
      const { status } = await axios.delete("/api/admin/routine", {
        data: { routineId: routine.id },
      })
      if (status !== 200)
        return toast({
          title: "Error updating class status!",
          description:
            "We were unable to process the request. Please try again later.",
          variant: "destructive",
        })

      setChanges({
        changes: [...changes.filter((item) => item.routine_id !== routine.id)],
      })

      return toast({
        title: "Successfully updated status.",
        variant: "default",
        color: "#ff0000",
      })
    } catch (error) {
      return toast({
        title: "Error updating class status!",
        description:
          "We were unable to process the request. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex size-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="size-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem
          onClick={() => applyModification("cancelled")}
          disabled={
            changes.filter((item) => item.routine_id === routine.id).length > 0
          }
        >
          Mark Cancelled
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => applyModification("rescheduled")}
          disabled={
            changes.filter((item) => item.routine_id === routine.id).length > 0
          }
        >
          Mark Rescheduled
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => cancelModification()}
          disabled={
            changes.filter((item) => item.routine_id === routine.id).length ===
            0
          }
        >
          Cancel changes
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
