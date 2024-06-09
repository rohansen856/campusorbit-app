import Image from "next/image"

import Arrow from "./arrow-svg"
import bg1 from "./bg/card-1.svg"
import bg2 from "./bg/card-2.svg"
import bg3 from "./bg/card-3.svg"
import bg4 from "./bg/card-4.svg"
import bg5 from "./bg/card-5.svg"
import bg6 from "./bg/card-6.svg"
import ClipPath from "./clip-path"
import Heading from "./heading"
import { benefits } from "./items"
import Section from "./section"

export function Benefits() {
  const cardBg = [bg1.src, bg2.src, bg3.src, bg4.src, bg5.src, bg6.src]
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-10">
      {benefits.map((item, i) => (
        <div
          className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]"
          style={{
            backgroundImage: `url(${cardBg[i]})`,
          }}
          key={item.id}
        >
          <div className="z-2 pointer-events-none relative flex min-h-[22rem] flex-col p-[2.4rem]">
            <h5 className="text- mb-5">{item.title}</h5>
            <p className="mb-6 text-sm text-muted-foreground">{item.text}</p>
            <div className="mt-auto flex items-center">
              <Image
                src={item.iconUrl}
                width={48}
                height={48}
                alt={item.title}
              />
              <p className="font-code text-n-1 ml-auto text-xs font-bold uppercase tracking-wider">
                Explore more
              </p>
              <Arrow />
            </div>
          </div>
          <div
            className="bg-n-8 absolute inset-0.5 -z-10"
            style={{ clipPath: "url(#benefits)" }}
          />
          <ClipPath />
        </div>
      ))}
    </div>
  )
}
