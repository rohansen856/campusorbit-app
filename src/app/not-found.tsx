import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function NotFoundError() {
  return (
    <div className="h-svh">
      <div className="m-auto flex size-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Oops! Page Not Found!</span>
        <p className="text-center text-muted-foreground">
          It seems like the page you&apos;re looking for <br />
          does not exist or might have been removed.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href={"/dashboard"}
            className={buttonVariants({ variant: "outline" })}
          >
            Go Back
          </Link>
          <Link href={"/"} className={buttonVariants()}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
