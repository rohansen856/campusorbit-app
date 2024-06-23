import { Suspense } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

import { ErrorAction } from "./action"

export default function LoginError() {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center flex-col gap-6">
      <Suspense>
        <ErrorAction />
      </Suspense>
      <Link href={"/login"} className={cn(buttonVariants({ variant: "link" }))}>
        return to login
      </Link>
    </div>
  )
}
