"use client"

import React, { useState } from "react"
import Image from "next/image"

import Earth from "./earth-1"
import Earth2 from "./earth-2"

type Props = {}

const Globe = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <div className="relative overflow-hidden">
      <div className={`relative z-[2] max-sm:hidden`}>
        <Earth />
      </div>
      <div className={`relative z-[2] sm:hidden`}>
        <Earth2 />
      </div>
    </div>
  )
}

export default Globe
