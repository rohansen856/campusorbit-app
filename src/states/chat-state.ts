import { atom, useAtom } from "jotai"

type Config = {
  conversations: {
    role: "user" | "bot"
    time: Date
    reply: JSX.Element
  }[]
}

export const chatAtom = atom<Config>({
  conversations: [],
})

export function useChat() {
  return useAtom(chatAtom)
}
