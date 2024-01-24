import { Metadata } from "next"

import { MainContributors } from "@/components/main-contributors"
import { Testers } from "@/components/testers"

export const metadata: Metadata = {
    title: "Contributors",
    description: "Example dashboard app built using the components.",
}

export default function ContributorsPage() {
    return (
        <>
            <div className="flex h-[80vh] flex-col items-center justify-center space-y-5 p-5">
                <span className="mb-14 font-heading text-5xl">
                    Main contributors
                </span>
                <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
                    <MainContributors
                        name="Rohan"
                        speciality="ui/ux, backend"
                        email="rohansen856@gmail.com"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 p-5">
                <span className="mb-6 font-heading text-5xl">Beta Testers</span>
                <div className="grid grid-cols-3 space-x-3 space-y-2">
                    <Testers
                        name="Tharun Tej Peddinti"
                        email="tharuntejpeddinti3@gmail.com"
                        image="https://utfs.io/f/636c80b4-72e2-46e7-ae2d-4f0672c7562e-un2s1u.57.33_8a777cd9.jpg"
                    />
                    <Testers
                        name="Sayan Chakraborty"
                        email="sayan.chakraborty0811@gmail.com"
                        image="https://utfs.io/f/b5788c33-e5e3-4702-92ab-7e935ae3b1a4-ppmzr2.07.04_298d5f25.jpg"
                    />
                    <Testers
                        name="Ritankar Saha"
                        email="ritankar.saha786@gmail.com"
                        image="https://utfs.io/f/984554b3-46af-4761-a35c-44ed0c572cb7-4c0pks.jpg"
                    />
                    <Testers name="Rohan" email="rohansen856@gmail.com" />
                    <Testers name="Rohan" email="rohansen856@gmail.com" />
                    <Testers name="Rohan" email="rohansen856@gmail.com" />
                    <Testers name="Rohan" email="rohansen856@gmail.com" />
                </div>
            </div>
        </>
    )
}
