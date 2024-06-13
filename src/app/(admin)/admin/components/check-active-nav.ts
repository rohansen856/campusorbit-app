import { usePathname } from "next/navigation"

export default function useCheckActiveNav() {
  const pathname = usePathname()

  const checkActiveNav = (href: string) => {
    if (!pathname) return false
    return pathname === href
  }

  return { checkActiveNav }
}
