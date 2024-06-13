import {
  IconApps,
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconError404,
  IconExclamationCircle,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconHexagonNumber5,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUsers,
  IconUserShield,
} from "@tabler/icons-react"

import { Icons } from "@/components/icons"

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: "Welcome",
    label: "",
    href: "/admin",
    icon: <Icons.admin />,
  },
  {
    title: "Statistics",
    label: "3",
    href: "/admin/stats",
    icon: <Icons.billing />,
  },
  {
    title: "Routine",
    label: "9",
    href: "/admin/routine",
    icon: <Icons.stopwatch />,
  },
  {
    title: "Mess",
    label: "",
    href: "/admin/mess",
    icon: <Icons.food />,
  },
  {
    title: "Clubs",
    label: "",
    href: "/admin/clubs",
    icon: <Icons.club />,
  },
  {
    title: "Authentication",
    label: "",
    href: "",
    icon: <Icons.media />,
    sub: [
      {
        title: "Sign In (email + password)",
        label: "",
        href: "/sign-in",
        icon: <Icons.media />,
      },
      {
        title: "Sign In (Box)",
        label: "",
        href: "/sign-in-2",
        icon: <Icons.media />,
      },
      {
        title: "Sign Up",
        label: "",
        href: "/sign-up",
        icon: <Icons.media />,
      },
      {
        title: "Forgot Password",
        label: "",
        href: "/forgot-password",
        icon: <Icons.media />,
      },
      {
        title: "OTP",
        label: "",
        href: "/otp",
        icon: <Icons.media />,
      },
    ],
  },
  {
    title: "Requests",
    label: "10",
    href: "/requests",
    icon: <Icons.media />,
    sub: [
      {
        title: "Trucks",
        label: "9",
        href: "/trucks",
        icon: <Icons.media />,
      },
      {
        title: "Cargos",
        label: "",
        href: "/cargos",
        icon: <Icons.media />,
      },
    ],
  },
  {
    title: "Analysis",
    label: "",
    href: "/analysis",
    icon: <Icons.media />,
  },
  {
    title: "Extra Components",
    label: "",
    href: "/extra-components",
    icon: <Icons.media />,
  },
  {
    title: "Error Pages",
    label: "",
    href: "",
    icon: <Icons.media />,
    sub: [
      {
        title: "Not Found",
        label: "",
        href: "/404",
        icon: <Icons.media />,
      },
      {
        title: "Internal Server Error",
        label: "",
        href: "/500",
        icon: <Icons.media />,
      },
      {
        title: "Maintenance Error",
        label: "",
        href: "/503",
        icon: <Icons.media />,
      },
    ],
  },
  {
    title: "Settings",
    label: "",
    href: "/settings",
    icon: <Icons.media />,
  },
]
