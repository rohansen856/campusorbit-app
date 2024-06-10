"use client"

import { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem, SidebarNavItem } from "@/types"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"

import { useSidebar } from "./hooks/useSidebar"

interface DashboardNavProps {
  items: SidebarNavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
  isMobileNav?: boolean
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  const path = usePathname()
  const { isMinimized } = useSidebar()

  if (!items?.length) {
    return null
  }

  console.log("isActive", isMobileNav, isMinimized)
  console.log(items)

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || "warning"]
          return (
            item.href && (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.disabled ? "/" : item.href}
                    className={cn(
                      "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href && `bg-${item.color || "secondary"}`,
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false)
                    }}
                  >
                    <Icon
                      className={cn(
                        `ml-3 size-5`,
                        `text-${item.color || "primary"}`,
                        path === item.href && `text-primary`
                      )}
                    />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ""
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? "hidden" : "inline-block"}
                >
                  {item.title} hhh
                </TooltipContent>
              </Tooltip>
            )
          )
        })}
      </TooltipProvider>
    </nav>
  )
}
