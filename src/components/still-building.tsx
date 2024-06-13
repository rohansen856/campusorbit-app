import Image from "next/image"

export function StillBuilding() {
  return (
    <div className="h-[80vh] w-full pt-12 space-y-4">
      <div className="relative h-[70%] w-full">
        <Image
          src={"/images/illustrations/making.png"}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <p className="text-center text-lg">Still Building this page</p>
    </div>
  )
}
