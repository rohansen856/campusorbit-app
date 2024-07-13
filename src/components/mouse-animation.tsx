"use client"

import { useEffect, useRef } from "react"

interface CustomCursorProps extends React.HTMLProps<HTMLDivElement> {
  username?: string | null
}

export function CustomCursor({ username, ...props }: CustomCursorProps) {
  const cursor = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursor?.current) return
      cursor.current.style.left = `${e.clientX + 25}px`
      cursor.current.style.top = `${e.clientY + 25}px`
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursor, cursor.current])

  return (
    username && (
      <div
        ref={cursor}
        className="fixed duration-500 transition-all p-px rounded-full rounded-tl-none max-w-32 bg-blue-700 px-3 font-extralight text-secondary-foreground text-sm z-50"
      >
        @{username}
      </div>
    )
  )
}
