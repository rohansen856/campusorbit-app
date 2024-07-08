"use client"

import { useState } from "react"
import { redirect } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Profile } from "@prisma/client"
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
import { Icons } from "@/components/icons"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  full_name: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  programme: z.string().min(2, {
    message: "Invalid programme.",
  }),
  branch: z.string().min(2, {
    message: "Invalid branch.",
  }),
  semester: z
    .string()
    .min(1, {
      message: "Invalid semester",
    })
    .max(2, {
      message: "Invalid semester",
    }),
  group: z
    .string()
    .min(1, {
      message: "Invalid group.",
    })
    .max(1, {
      message: "Invalid group",
    }),
  mess: z
    .string()
    .min(1, {
      message: "Invalid mess.",
    })
    .max(2, {
      message: "Invalid mess",
    }),
})

interface DetailsFormProps {
  profile: Profile | null
}

export function DetailsForm({ profile }: DetailsFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: profile?.username || "",
      branch: profile?.branch || "",
      full_name: profile?.full_name || "",
      group: profile?.group || "",
      programme: profile?.programme,
      semester: profile?.semester.toString(),
      mess: profile?.mess?.toString(),
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    try {
      const res = await axios.patch(`/api/users/${profile?.id}`, {
        ...data,
        semester: Number(data.semester),
        mess: Number(data.mess),
      })
      if (res.status === 200)
        toast({
          title: "Info updated successfully",
          variant: "default",
        })
    } catch (error) {
      console.log(error)
      toast({
        title: "Error updating info!",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-3xl space-y-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="rcsen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input placeholder="rcsen" {...field} />
              </FormControl>
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
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={field.value || "Select your programme"}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"btech"}>B. Tech</SelectItem>
                  <SelectItem value={"mtech"}>M. Tech</SelectItem>
                  <SelectItem value={"phd"}>PHD</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="branch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Branch</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={field.value || "Select your branch"}
                    />
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
              <FormLabel>Semester</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={field.value || "Select your semester"}
                    />
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
                <Input placeholder="rcsen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mess"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mess</FormLabel>
              <FormControl>
                <Input placeholder="rcsen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full col-span-1 md:col-span-2 xl:col-span-3"
          disabled={isLoading}
        >
          {isLoading && <Icons.spinner className="animate-spin size-4" />}
          Submit
        </Button>
      </form>
    </Form>
  )
}
