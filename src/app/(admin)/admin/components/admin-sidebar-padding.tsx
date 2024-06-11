"use client"

import { useSidebar } from "@/hooks/use-sidebar"

export function AdminSidebarPadding() {
  const [{ isMinimized }] = useSidebar()
  return (
    <div
      className={`w-0 shrink-0 transition-[width] duration-200 ${isMinimized ? "md:w-14" : "md:w-64"}`}
    />
  )
}
