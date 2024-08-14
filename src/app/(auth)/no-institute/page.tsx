import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default async function NoInstitute() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mb-24">
        Your Email id does not belong to any institute!
      </h1>
      <Link className={buttonVariants()} href={"/login"}>
        Go Back
      </Link>
    </div>
  )
}
