import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ChatGuide() {
  return (
    <div className="relative flex-col items-start gap-8 flex w-full">
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Guide</legend>
          <div className="grid">
            <h5>Can help with:</h5>
            <h6 className="ml-4 text-md">Schedule</h6>
            <ul className="ml-6 text-sm mb-2">
              <li>- today&apos;s class schedule</li>
              <li>- all the elective subjects</li>
            </ul>
            <h6 className="ml-4 text-md">Mess menu</h6>
            <ul className="ml-6 text-sm mb-2">
              <li>- today&apos;s menu</li>
              <li>- today&apos;s breakfast</li>
              <li>- today&apos;s lunch</li>
              <li>- today&apos;s dinner</li>
            </ul>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Example prompt</Label>
            <Textarea
              id="content"
              placeholder="You are a..."
              className="min-h-12"
              disabled
              value={"get today's class schedule"}
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}
