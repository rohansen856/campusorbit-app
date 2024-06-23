"use client"

import { redirect } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  programme: z.string().min(2, {
    message: "Programme must be at least 2 characters.",
  }),
  branch: z.enum(["cs", "ec", "me", "sem"]),
  semester: z.string().min(1).max(1),
  group: z.enum(["A", "B", "C", "D", "E"]),
})

export function NewProfile() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      branch: "cs",
      fullname: "",
      group: "A",
      programme: "",
      semester: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await axios.post(`/api/users`, {
        ...data,
        semester: Number(data.semester),
      })
      if (res.status === 200) return redirect("/dashboard")
    } catch (error) {
      console.log(error)
      toast({
        title: "Error logging in!",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="programme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Programme</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your programme.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="branch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"cs"}>CSE</SelectItem>
                  <SelectItem value={"ec"}>ECE</SelectItem>
                  <SelectItem value={"me"}>ME</SelectItem>
                  <SelectItem value={"sm"}>SM</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="semester"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"1"}>1</SelectItem>
                  <SelectItem value={"2"}>2</SelectItem>
                  <SelectItem value={"3"}>3</SelectItem>
                  <SelectItem value={"4"}>4</SelectItem>
                  <SelectItem value={"5"}>5</SelectItem>
                  <SelectItem value={"6"}>6</SelectItem>
                  <SelectItem value={"7"}>7</SelectItem>
                  <SelectItem value={"8"}>8</SelectItem>
                </SelectContent>
              </Select>
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your Group.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}
