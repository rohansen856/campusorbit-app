import { atom, useAtom } from "jotai"

import { Mail, mails } from "../app/(dashboard)/dashboard/mails/data"

type Config = {
  selected: Mail["id"] | null
}

export const mailAtom = atom<Config>({
  selected: null,
})

export function useMail() {
  return useAtom(mailAtom)
}
