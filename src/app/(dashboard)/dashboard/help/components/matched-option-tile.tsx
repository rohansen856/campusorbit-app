"use client"

import { useChat } from "@/states/chat-state"
import { SquareArrowRight } from "lucide-react"

interface MatchedOptionTileProps extends React.HTMLAttributes<HTMLDivElement> {
  option: {
    title: string
    description: string
    action?: {
      initial: string
      function(): Promise<JSX.Element>
    }
  }
  setValue?: React.Dispatch<React.SetStateAction<string>>
}

export function MatchedOptionTile({
  option,
  setValue,
  ...props
}: MatchedOptionTileProps) {
  const [{ conversations }, setConvos] = useChat()
  async function getAnswer() {
    setConvos({
      conversations: [
        ...conversations,
        {
          role: "user",
          time: new Date(),
          reply: <div>{option.description}</div>,
        },
        {
          role: "bot",
          time: new Date(),
          reply: <p className="text-5xl">. . .</p>,
        },
      ],
    })
    const text = await option.action?.function()
    if (!text) return
    setConvos({
      conversations: [
        ...conversations,
        {
          role: "user",
          time: new Date(),
          reply: <div>{option.description}</div>,
        },
        {
          role: "bot",
          time: new Date(),
          reply: text,
        },
      ],
    })
  }
  return (
    <div
      className="p-2 flex text-primary/50 cursor-pointer hover:bg-secondary rounded-sm items-center"
      onClick={() => {
        console.log(option.action?.initial)
        getAnswer()
        setValue?.("")
      }}
    >
      <h5 className="text-md w-24">{option.title}</h5>
      <p className="text-sm text-primary/30">{option.description}</p>
      <SquareArrowRight className="ml-auto" />
    </div>
  )
}
