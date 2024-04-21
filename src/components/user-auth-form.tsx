"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
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
import { toast } from "@/components/ui/use-toast"

import { Icons } from "./icons"
import { Input } from "./ui/input"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormSchema = z.object({
  userId: z.string().min(6, {
    message: "Your ID is not valid",
  }),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userId: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true)
      const response = await axios.post(`/api/auth/${data.userId}`, data)
      if (response.status === 200) return router.push("/user/profile")
      return toast({
        title: "Invalid User ID",
        description: "Your User ID is not valid. Please enter a valid id.",
        variant: "destructive",
      })
    } catch (error) {
      return toast({
        title: "Invalid User ID",
        description: "Your User ID is not valid. Please enter a valid id.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Id</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your id here" {...field} />
                </FormControl>
                <FormDescription>Get your UserId from the app</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Icons.spinner className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Thank you for your support
          </span>
        </div>
      </div>
    </div>
  )
}
