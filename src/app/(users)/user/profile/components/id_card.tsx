import Image from "next/image"

export function IdCard({ image }: { image: string | null }) {
  return (
    <div className="h-[250px] w-[500px] rounded-lg bg-blue-800 p-2">
      <div className="size-full rounded-md bg-blue-500 p-1">
        <div className="size-full rounded-sm bg-blue-800">
          <div className="flex h-1/3 w-full items-center justify-between">
            <div className="h-full w-20 p-1">
              <div className="relative size-full overflow-hidden rounded-lg bg-white">
                <Image
                  src={"/iiitdmj-logo.jpg"}
                  alt="iiitdmj"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex h-full flex-col items-end p-1 font-bold">
              <h1 className="text-xs">PDPM</h1>
              <h1 className="text-sm">
                INDIAN INSTITUTE OF INFORMATION TECHNOLOGY,
              </h1>
              <h1 className="text-sm">DESIGN AND MANUFACTURING JABALPUR</h1>
              <h1 className="text-xxs font-extralight">
                (An Institute of National Importance Established by Ministry of
                Education, Govt. of India)
              </h1>
            </div>
          </div>
          <div className="flex h-2/3 w-full flex-col items-center justify-between bg-white text-black">
            <div className="relative flex max-h-[97%] w-full flex-1 font-bold">
              <div className="flex h-full w-1/5 flex-col justify-between p-1">
                <div className="relative h-[90px] w-full">
                  <Image
                    src={
                      image
                        ? `https://utfs.io/f/${image} `
                        : "/images/avatars/shadcn.png"
                    }
                    alt="iiitdmj"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-6 w-full">
                  <Image
                    src={"/signature.png"}
                    alt="signature"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full text-nowrap text-xs font-extrabold">
                  Holder&apos;s Signature
                </div>
              </div>
              <div className="mt-2 h-full w-1/3 space-y-1 pl-2 text-sm">
                <h1>Name</h1>
                <h1>Roll No</h1>
                <h1>Father&apos;s Name</h1>
                <h1>Programme</h1>
                <h1>Valid up to</h1>
              </div>
              <div className="mt-2 h-full w-6 space-y-1 text-sm">
                <h6>:</h6>
                <h6>:</h6>
                <h6>:</h6>
                <h6>:</h6>
                <h6>:</h6>
              </div>
              <div className="mt-2 h-full w-2/5 space-y-1 text-sm">
                <h1>Rohan Chandra Sen</h1>
                <h1>23BCS212</h1>
                <h1>Prabir Chandra Sen</h1>
                <h1>B.Tech (CSE)</h1>
                <h1>31-08-2027</h1>
                <div className="absolute bottom-0 right-2">
                  <div className="relative h-6 w-full">
                    <Image
                      src={"/signature.png"}
                      alt="signature"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="w-full text-nowrap text-xs font-extrabold">
                    Dean (Students)
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2 w-2/5 bg-blue-800"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
