import { createStore } from "jotai"

import { mailAtom } from "./mail-state"
import { routineAtom } from "./routine-state"
import { sidebarAtom } from "./sidebar-state"

const myStore = createStore()

myStore.set(mailAtom, { selected: null })
myStore.set(routineAtom, { changes: [] })
myStore.set(sidebarAtom, { isMinimized: true })

export { myStore, mailAtom, routineAtom, sidebarAtom }
