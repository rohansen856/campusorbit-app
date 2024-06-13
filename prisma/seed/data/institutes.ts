import { Institute } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"

export const institute: Institute[] = [
  {
    id: "4823b5f2-fd66-4853-ba92-1802e9174d77",
    name: "iiitdmj",
    full_name:
      "pdpm indian institute of information technology, design and manufacturing, jabalpur",
    domain: "iiitdmj.ac.in",
  },
  {
    id: "f9b5d62c-250d-402c-b66f-3c7727104287",
    name: "iitb",
    full_name: "indian institute of technology, bhuwaneswar",
    domain: "iitb.ac.in",
  },
  {
    id: "736ced55-83c9-40fb-a8e1-5d0a08e675dd",
    name: "iitk",
    full_name: "indian institute of technology, kanpur",
    domain: "iitk.ac.in",
  },
  {
    id: "0e5ce827-bf7f-4653-9f04-9d18bdc86d0b",
    name: "iitkgp",
    full_name: "indian institute of technology, kharagpur",
    domain: "iitgkp.ac.in",
  },
]
