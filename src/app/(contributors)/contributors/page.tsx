import { Metadata } from "next"

import { ContactDeveloper } from "@/components/contact"
import { CreatorsComponent } from "@/components/creators-card"
import { Testers } from "@/components/testers"

export const metadata: Metadata = {
    title: "Contributors",
    description: "Example dashboard app built using the components.",
}

export default function ContributorsPage() {
    const testers = [
        {
            name: "Rohan Chandra Sen",
            email: "rohansen856@gmail.com",
            image: "https://utfs.io/f/064e5de1-7b54-4a1a-a86b-26df4b79c204-epgwbf.png",
        },
        {
            name: "Tharun Tej Peddinti",
            email: "tharuntejpeddinti3@gmail.com",
            image: "https://utfs.io/f/636c80b4-72e2-46e7-ae2d-4f0672c7562e-un2s1u.57.33_8a777cd9.jpg",
        },
        {
            name: "Sayan Chakraborty",
            email: "sayan.chakraborty0811@gmail.com",
            image: "https://utfs.io/f/b5788c33-e5e3-4702-92ab-7e935ae3b1a4-ppmzr2.07.04_298d5f25.jpg",
        },
        {
            name: "Ritankar Saha",
            email: "ritankar.saha786@gmail.com",
            image: "https://utfs.io/f/984554b3-46af-4761-a35c-44ed0c572cb7-4c0pks.jpg",
        },
        {
            name: "Nitin Pandey",
            email: "nitin2005p@gmail.com",
            image: "https://utfs.io/f/7e1650d4-6313-41fb-a76a-0da01e6e572f-ppmzr0.07.50_8d299cbb.jpg",
        },
    ]
    return (
        <>
            <div className="mb-12 flex h-[80vh] flex-col items-center justify-center space-y-5 p-5">
                <span className="mb-6 font-heading text-5xl">Creator</span>
                <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
                    <CreatorsComponent
                        name="Rohan Chandra Sen"
                        speciality="ui/ux, backend"
                        email="rohansen856@gmail.com"
                        about="A fulls tack react and flutter developer with extensive knowledge in ui/ux developement"
                    />
                </div>
            </div>
            <div className="mb-12 flex flex-col items-center justify-center space-y-5 p-5">
                <span className="mb-4 font-heading text-5xl">Beta Testers</span>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
                    {testers.map((tester) => (
                        <Testers
                            name={tester.name}
                            email={tester.email}
                            image={tester.image}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 p-5">
                <span className="mb-4 font-heading text-5xl">Contact Us</span>
                <ContactDeveloper />
            </div>
        </>
    )
}
