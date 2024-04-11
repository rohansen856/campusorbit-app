import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Profile",
      href: "/user/profile",
      icon: "post",
    },
    {
      title: "Admin Panel",
      href: "/overview",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/user/profile/settings",
      icon: "settings",
    },
  ],
}
