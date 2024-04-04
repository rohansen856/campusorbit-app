"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { BellPlus } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { insertNotificationsSchema } from "@/lib/validations/notification"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  description: z.string(),
  link: z
    .string()
    .min(2, {
      message: "Link too short!",
    })
    .url({ message: "Invalid url entered" }),
  branch: z.string({
    required_error: "Please select a branch.",
  }),
  group: z.string({
    required_error: "Please select a group.",
  }),
})

export function NewNotifications() {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
      branch: "",
      group: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true)
    try {
      const payload = insertNotificationsSchema.parse({
        ...data,
        from: "admin",
      })
      const res = await axios.post("/api/notifications", payload)

      toast({
        title: "Sent!",
        description: "Notifications sent successfully",
        variant: "default",
      })
      return router.refresh()
    } catch (error) {
      console.log(error)
      return toast({
        title: "Error sending notification",
        description: "Failed to send notification! Try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          New Notification{"  "}
          <BellPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Notification</DialogTitle>
          <DialogDescription>
            Create a new notification for the users
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id="branch">
                          <SelectValue placeholder="Select Branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BCS">BCS</SelectItem>
                          <SelectItem value="BEC">BEC</SelectItem>
                          <SelectItem value="BME">BME</SelectItem>
                          <SelectItem value="BSM">BSM</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="group"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id="group">
                          <SelectValue placeholder="Select Group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                          <SelectItem value="D">D</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title of the message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="description of the message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input placeholder="link of the message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Icons.spinner /> : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
