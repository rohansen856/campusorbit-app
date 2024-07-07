"use client"

import { useEffect, useRef, useState } from "react"
import { Delete } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input, type InputProps } from "@/components/ui/input"

import { HelperFunctions } from "./helper-functions"
import { MatchedOptionTile } from "./matched-option-tile"

interface ChatInputPrompts extends InputProps {}

export function ChatInput({ ...props }: ChatInputPrompts) {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const [matchedOptions, setMatchedOptions] = useState<
    {
      title: string
      description: string
      action: {
        initial: string
        function(): Promise<JSX.Element>
      }
    }[]
  >([])

  const allOptions = [
    {
      title: "Schedule",
      description: "Get my today's class schedule",
      action: HelperFunctions.getRoutineToday,
    },
    {
      title: "Schedule",
      description: "Get all of my electives",
      action: HelperFunctions.getAllElectives,
    },
    {
      title: "Mess",
      description: "Get my mess menu",
      action: HelperFunctions.getMessToday,
    },
    {
      title: "Mess",
      description: "Get today's breakfast menu",
      action: HelperFunctions.getBreakfastToday,
    },
    {
      title: "Mess",
      description: "Get today's lunch menu",
      action: HelperFunctions.getLunchToday,
    },
    {
      title: "Mess",
      description: "Get today's dinner menu",
      action: HelperFunctions.getDinnerToday,
    },
  ]

  useEffect(() => {
    if (value.length >= 2)
      setMatchedOptions(
        allOptions.filter((option) =>
          option.description.replace(" ", "").includes(value.replace(" ", ""))
        )
      )
  }, [value])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "/") {
        event.preventDefault()
        setValue("  ")
        setMatchedOptions(allOptions)
        inputRef.current?.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="w-full relative">
      <div className="w-full bottom-12 absolute p-2">
        <div
          className={cn(
            "bg-secondary rounded w-full max-h-64 overflow-y-auto duration-500 px-2",
            value.length >= 2 && "p-2"
          )}
        >
          {value.length >= 2 &&
            (matchedOptions.length === 0 ? (
              <MatchedOptionTile
                option={{
                  title: "Oops!",
                  description: "No mathes found for your search query!",
                }}
              />
            ) : (
              matchedOptions.map((option, i) => {
                return (
                  <MatchedOptionTile
                    key={i}
                    option={option}
                    setValue={setValue}
                  />
                )
              })
            ))}
        </div>
      </div>
      <Button
        variant={"outline"}
        size={"icon"}
        className="absolute left-0 text-xl text-primary/50"
        onClick={() => {
          setValue("  ")
          setMatchedOptions(allOptions)
          inputRef.current?.focus()
        }}
      >
        /
      </Button>
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute right-0 text-xl text-primary/50"
        onClick={() => setValue("")}
      >
        <Delete />
      </Button>
      <Input
        className={cn("pl-12", props.className)}
        placeholder="try keywords like: mess, schedule, club etc."
        value={value}
        ref={inputRef}
        onChange={(e) => {
          const newValue = e.target.value
          const regex = /^[A-Za-z\s]*$/
          if (regex.test(newValue)) {
            setValue(newValue)
          }
        }}
      />
    </div>
  )
}
