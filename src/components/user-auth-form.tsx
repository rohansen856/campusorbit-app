"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: zodResolver(userAuthSchema),
  // })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  // async function onSubmit(data: FormData) {
  //   setIsLoading(true)

  //   const signInResult = await signIn("credentials", {
  //     email: data.email,
  //     password: data.password,
  //     callbackUrl: searchParams?.get("from") || "/dashboard",
  //   })

  //   setIsLoading(false)

  //   if (!signInResult?.ok) {
  //     if (signInResult?.status === 401)
  //       return toast({
  //         title: "Wrong credentials.",
  //         description:
  //           "Your email or password is incorrect. Please enter valid details!",
  //         variant: "destructive",
  //       })
  //   }

  //   return toast({
  //     title: "Login successful",
  //     description: "Thank you for using our app!",
  //   })
  // }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form> */}
      <div className="relative">
        <div className="relative flex justify-center text-xs uppercase">
          <Link
            className={buttonVariants({
              className: "w-[400px] max-w-full gap-4",
            })}
            href={"/api/auth/google"}
          >
            <Image src={"/icons/google.svg"} height={20} width={20} alt="G" />
            google
          </Link>
        </div>
      </div>
    </div>
  )
}
