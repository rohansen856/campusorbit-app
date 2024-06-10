"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sandwich,
  Search,
  SettingsIcon,
  SquareTerminal,
  Timer,
  TowerControl,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"

export function SideNav() {
  const pathname = usePathname()

  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Icons.logo className="size-10 fill-foreground" />
      </div>
      <nav className="grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-lg text-blue-600",
                  pathname === "/dashboard" && "bg-blue-600 text-primary"
                )}
                aria-label="Playground"
              >
                <SquareTerminal className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Dashboard
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/routine"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-lg text-green-600",
                  pathname === "/dashboard/routine" &&
                    "bg-green-600 text-primary"
                )}
                aria-label="Routine"
              >
                <Timer className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Routine
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/mess"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-lg text-teal-600",
                  pathname === "/dashboard/mess" && "bg-teal-600 text-primary"
                )}
                aria-label="Mess"
              >
                <Sandwich className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Mess
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/users"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-lg text-cyan-600",
                  pathname === "/dashboard/users" && "bg-cyan-600 text-primary"
                )}
                aria-label="Search"
              >
                <Search className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Search
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto grid gap-1 p-2 pb-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  pathname === "/admin" && "rounded-lg bg-secondary"
                )}
                aria-label="Admin"
              >
                <TowerControl className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Admin
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  pathname === "/dashboard/settings" &&
                    "rounded-lg bg-secondary"
                )}
                aria-label="Settings"
              >
                <SettingsIcon className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}
