"use client"

import { useSidebar } from "@/hooks/use-sidebar"

export function AdminSidebarPadding() {
  const [{ isMinimized }] = useSidebar()
  return isMinimized ? (
    <div className="w-0 shrink-0 md:w-14" />
  ) : (
    <div className="w-0 shrink-0 md:w-64" />
  )
}
