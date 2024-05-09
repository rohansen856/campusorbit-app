import { useState } from "react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { toast } from "@/components/ui/use-toast"

import { Routine } from "./schema"

interface EditTableProps {
  data: Routine
}

export function EditTable({ data }: EditTableProps) {
  const [code, setCode] = useState<string>(data.courseCode ?? "")
  const [title, setTitle] = useState<string>(data.courseTitle ?? "")
  const [type, setType] = useState<string>(data.type ?? "")
  const [prof, setProf] = useState<string>(data.prof ?? "")
  const [from, setFrom] = useState<string>(data.from)
  const [to, setTo] = useState<string>(data.to)
  const [day, setDay] = useState<number>(data.day)
  const [sem, setSem] = useState<number>(data.semester)
  const [branch, setBranch] = useState<string>(data.branch)
  const [room, setRoom] = useState<string>(data.room)
  const [group, setGroup] = useState<string>(data.group)

  async function changeRoutine() {
    const query = {
      id: data.id,
      code,
      type,
      prof,
      from,
      to,
      day,
      sem,
      branch,
      room,
      group,
    }
    try {
      const response = await axios.post("/routine/modifications", query)
      if (response.status !== 204)
        return toast({
          title: "Something went wrong!",
          description:
            "There was an error doing modification. Please try again later.",
          variant: "destructive",
        })

      return toast({
        title: "Successfully updated",
        description: "There routine was modified successfully.",
        variant: "default",
      })
    } catch (error) {
      return toast({
        title: "Something went wrong!",
        description:
          "There was an error doing modification. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          onClick={() => {
            console.log(data)
          }}
        >
          Edit
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit routine</SheetTitle>
          <SheetDescription>
            Make changes to the routine here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="code" className="text-right">
              Code
            </Label>
            <Input
              id="code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value?.toUpperCase())
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value?.toUpperCase())
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Input
              id="type"
              value={type}
              onChange={(e) => {
                setType(e.target.value)
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="prof" className="text-right">
              Prof
            </Label>
            <Input
              id="prof"
              value={prof}
              onChange={(e) => {
                setProf(e.target.value)
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="from" className="text-right">
              From
            </Label>
            <Input
              id="from"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value)
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="to" className="text-right">
              To
            </Label>
            <Input
              id="to"
              value={to}
              onChange={(e) => {
                setTo(e.target.value)
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="day" className="text-right">
              Day
            </Label>
            <Input
              id="day"
              value={day}
              onChange={(e) => {
                setDay(Number.parseInt(e.target.value))
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sem" className="text-right">
              Sem
            </Label>
            <Input
              id="sem"
              value={sem}
              onChange={(e) => {
                setSem(Number.parseInt(e.target.value))
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="branch" className="text-right">
              Branch
            </Label>
            <Input
              id="branch"
              value={branch}
              onChange={(e) => {
                setBranch(e.target.value)
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="room" className="text-right">
              Room
            </Label>
            <Input
              id="room"
              value={room}
              onChange={(e) => {
                setRoom(e.target.value)
              }}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="group" className="text-right">
              Group
            </Label>
            <Input
              id="group"
              value={group}
              onChange={(e) => {
                setGroup(e.target.value)
              }}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={changeRoutine}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
