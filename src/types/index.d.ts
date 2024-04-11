import { User } from "@prisma/client"
import type { Icon } from "lucide-react"

import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type OverviewConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type UserSchema = {
  roll: number | null
  email: string
  id: string
  createdAt: string | null
  username: string | null
  fullName: string | null
  branch: string | null
  sem: number | null
  mess: number | null
  year: number | null
  visibility: boolean | null
  image: string | null
}

export type MainContributors = {
  id: number
  name: string
  email: string
  image?: string
}

export type CurrentuserProps = {
  id: number
  name: string
  email: string
}

export type RoutineCardProps = Pick<
  Routine,
  "code" | "room" | "prof" | "from" | "to"
>
