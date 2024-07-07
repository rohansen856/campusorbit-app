import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"

import { ChatDialogues } from "./components/chat-dialogues"
import { ChatGuide } from "./components/chat-guide"
import { ChatInput } from "./components/chat-input"

export default async function Dashboard() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")

  return (
    <div className="flex h-[80vh] w-full gap-2">
      <div className="hidden lg:flex max-w-sm flex-1 h-full">
        <ChatGuide />
      </div>
      <div className="flex flex-col items-center justify-end h-full flex-1 bg-muted/50 rounded-xl p-2 gap-2">
        <div className="bg-background rounded-lg w-full flex-1 flex items-end overflow-scroll">
          <ChatDialogues user={user} />
        </div>
        <ChatInput />
      </div>
    </div>
  )
}
