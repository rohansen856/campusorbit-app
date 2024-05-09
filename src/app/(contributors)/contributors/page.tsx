import { Metadata } from "next/types"

import { ContactDeveloper } from "@/components/contact"
import { CreatorsComponent } from "@/components/creators-card"
import { Testers } from "@/components/testers"

export const metadata: Metadata = {
  title: "Contributors",
  description: "Creators and testers of our application.",
}

export default async function ContributorsPage() {
  return (
    <>
      <div className="mb-12 flex h-[80vh] flex-col items-center justify-center space-y-5 p-5">
        <span className="mb-6 font-heading text-5xl">Creator</span>
        <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
          <CreatorsComponent
            name="Rohan Chandra Sen"
            speciality="ui/ux, backend"
            email="rohansen856@gmail.com"
            about="A fullstack react and flutter developer with extensive knowledge in ui/ux developement"
          />
        </div>
      </div>
      <div className="mb-12 flex flex-col items-center justify-center space-y-5 p-5">
        <span className="mb-4 font-heading text-5xl">Beta Testers</span>
        <Testers />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 p-5">
        <span className="mb-4 font-heading text-5xl">Contact Us</span>
        <ContactDeveloper />
      </div>
    </>
  )
}
