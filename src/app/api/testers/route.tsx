import { db } from "@/lib/db"

interface Person {
  id: number
  name: string
  email: string
  image: string
}

const data: Person[] = [
  {
    id: 1,
    name: "Rohan Chandra Sen",
    email: "rohansen856@gmail.com",
    image: "https://utfs.io/f/064e5de1-7b54-4a1a-a86b-26df4b79c204-epgwbf.png",
  },
  {
    id: 2,
    name: "Tharun Tej Peddinti",
    email: "tharuntejpeddinti3@gmail.com",
    image:
      "https://utfs.io/f/636c80b4-72e2-46e7-ae2d-4f0672c7562e-un2s1u.57.33_8a777cd9.jpg",
  },
  {
    id: 3,
    name: "Sayan Chakraborty",
    email: "sayan.chakraborty0811@gmail.com",
    image:
      "https://utfs.io/f/b5788c33-e5e3-4702-92ab-7e935ae3b1a4-ppmzr2.07.04_298d5f25.jpg",
  },
  {
    id: 4,
    name: "Ritankar Saha",
    email: "ritankar.saha786@gmail.com",
    image: "https://utfs.io/f/984554b3-46af-4761-a35c-44ed0c572cb7-4c0pks.jpg",
  },
  {
    id: 6,
    name: "Ayush Narsian",
    email: "ayushnarsian@yahoo.com",
    image:
      "https://utfs.io/f/04c26e1d-62b6-400d-ae18-4f787cf42064-ppmzq5.41.04_bbfb3231.jpg",
  },
  {
    id: 7,
    name: "Sai Pramodh",
    email: "titanroyce33@gmail.com",
    image:
      "https://utfs.io/f/99462f85-9197-46f7-ae7c-82a4329dab0b-ppmzq3.24.46_4af817d5.jpg",
  },
  {
    id: 8,
    name: "Snigdha Gupta",
    email: "snigdhagupta22@gmail.com",
    image:
      "https://utfs.io/f/8cc9a9f8-9750-4bd4-9890-4a761afd3b0e-jljpb3.56.59_f1ab2677.jpg",
  },
]

export async function GET(req: Request) {
  try {
    const allTesters = data
    return new Response(JSON.stringify(allTesters), { status: 200 })
  } catch (e) {
    return new Response(null, { status: 500 })
  }
}
