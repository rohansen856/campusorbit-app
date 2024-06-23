"use client"

import { useSearchParams } from "next/navigation"

export function ErrorAction() {
  const params = useSearchParams()
  return <p>{JSON.stringify(params?.get("error"))}</p>
}
