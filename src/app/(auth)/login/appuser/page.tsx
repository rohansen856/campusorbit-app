"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormSchema = z.object({
  userId: z.string().min(6, {
    message: "Your ID is not valid",
  }),
})

export default function AppUsers() {
  const [status, setStatus] = useState<
    "Authenticating" | "Loading" | "Invalid" | "Error"
  >("Loading")
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.href.split("?")[1])
    if (params.has("redirect_from") && params.has("user_token")) {
      const token = params.get("user_token")
      if (!token) return
      onSubmit({ userId: token })
    }
  }, [])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setStatus("Authenticating")
      const response = await axios.post(`/api/auth/${data.userId}`, data)
      if (response.status === 200) {
        setStatus("Loading")
        return router.push("/user/profile")
      }
      return toast({
        title: "Invalid User ID",
        description: "Your User ID is not valid. Please enter a valid id.",
        variant: "destructive",
      })
    } catch (error) {
      setStatus("Error")
      return toast({
        title: "Invalid User ID",
        description: "Your User ID is not valid. Please enter a valid id.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10 lg:flex-row">
      <Icons.logo className="size-32" />
      <p className="font-heading text-lg lg:text-2xl 2xl:text-4xl">
        {status?.toString()}...
      </p>
    </div>
  )
}
