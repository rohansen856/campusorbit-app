"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/use-sidebar"

export function SidebarPadding() {
  const [{ isMinimized }] = useSidebar()
  return (
    <div
      className={cn(
        "w-0 shrink-0 transition-[width] duration-500",
        isMinimized ? "md:w-[72px]" : "md:w-72"
      )}
    />
  )
}
