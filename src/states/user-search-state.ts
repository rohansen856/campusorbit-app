import { Profile } from "@prisma/client"
import { atom, useAtom } from "jotai"

type Config = {
  profile: Profile | null
}

export const userSearchAtom = atom<Config>({
  profile: null,
})

export function useUserSearch() {
  return useAtom(userSearchAtom)
}
