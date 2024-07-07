"use client"

import { useChat } from "@/states/chat-state"
import { User } from "next-auth"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface ChatDialoguesProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User
}

export function ChatDialogues({ user, ...props }: ChatDialoguesProps) {
  const [{ conversations }] = useChat()
  return (
    <div className="flex flex-col w-full p-2 gap-4">
      {conversations.map((message, i) => (
        <div
          key={i}
          className={cn(
            "max-w-xl bg-secondary mr-6 rounded p-2 ml-0",
            message.role === "user" && "self-end mr-0 ml-6"
          )}
        >
          <div className="text-xs flex mb-2 gap-1 font-bold">
            {message.role === "user" ? (
              <>
                <Icons.user className="size-4" />
                <p className="mr-6">{user.name || user.email}</p>
              </>
            ) : (
              <>
                <Icons.logo className="size-4" />
                <p className="mr-6">Campusorbit</p>
              </>
            )}
            {message.time.toLocaleString()}
          </div>
          <div>{message.reply}</div>
        </div>
      ))}
    </div>
  )
}
