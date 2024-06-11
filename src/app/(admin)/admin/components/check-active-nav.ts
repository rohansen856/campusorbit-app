import { usePathname } from "next/navigation"

export default function useCheckActiveNav() {
  const pathname = usePathname()

  const checkActiveNav = (nav: string) => {
    if (!pathname) return false
    const pathArray = pathname.split("/").filter((item) => item !== "")

    return pathArray.includes(nav)
  }

  return { checkActiveNav }
}
