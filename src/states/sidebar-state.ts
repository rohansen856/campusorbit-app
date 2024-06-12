import { atom, useAtom } from "jotai"

type Config = {
  isMinimized: boolean
}

export const sidebarAtom = atom<Config>({
  isMinimized: true,
})

export function useSidebar() {
  return useAtom(sidebarAtom)
}
