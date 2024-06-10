"use client"

import React, { useState } from "react"
import { ChevronLeft } from "lucide-react"

import { navItems } from "@/config/dashboard"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/useSidebar"
import { DashboardNav } from "@/components/shared/dashboard-nav"

type SidebarProps = {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const [{ isMinimized }, setMinimized] = useSidebar()
  const [status, setStatus] = useState(false)

  const handleToggle = () => {
    setStatus(true)
    setMinimized({ isMinimized: !isMinimized })
    setTimeout(() => setStatus(false), 500)
  }
  return (
    <nav
      className={cn(
        `relative hidden h-screen flex-none border-r-2 md:block`,
        status && "duration-500",
        !isMinimized ? "w-72" : "w-[72px]",
        className
      )}
    >
      <ChevronLeft
        className={cn(
          "absolute -right-4 top-12 size-8 cursor-pointer rounded-full border bg-background p-1 text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="py-2">
          <div className="space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}
