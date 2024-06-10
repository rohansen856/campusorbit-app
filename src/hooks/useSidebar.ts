import { atom, useAtom } from "jotai"

type Config = {
  isMinimized: boolean
}

const configAtom = atom<Config>({
  isMinimized: false,
})

export function useSidebar() {
  return useAtom(configAtom)
}
