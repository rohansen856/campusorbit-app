import { atom, useAtom } from "jotai"

type Config = {
  changes: { routine_id: string; description: string | null }[]
}

export const routineAtom = atom<Config>({
  changes: [],
})

export function useRoutineChanges() {
  return useAtom(routineAtom)
}
