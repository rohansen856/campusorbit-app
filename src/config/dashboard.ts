import { SidebarNavItem } from "@/types"

export type User = {
  id: number
  name: string
  company: string
  role: string
  verified: boolean
  status: string
}
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
]

export const navItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "profile",
    color: "blue-600",
  },
  {
    title: "Routine",
    href: "/dashboard/routine",
    icon: "stopwatch",
    color: "green-600",
  },
  {
    title: "Mess",
    href: "/dashboard/mess",
    icon: "food",
    color: "teal-600",
  },
  {
    title: "Search",
    href: "/dashboard/search",
    icon: "search",
    color: "cyan-600",
  },
  {
    title: "Admin",
    href: "/dashboard/admin",
    icon: "admin",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "settings",
  },
]
