import { Icons } from "@/components/icons"

export default function DashboardLoading() {
  return (
    <div className="w-full h-[60vh] inset-0 flex justify-center items-center">
      <Icons.logo variant="loader" className="size-32 animate-spin" />
    </div>
  )
}
