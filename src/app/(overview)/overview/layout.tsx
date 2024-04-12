import { SiteFooter } from "@/components/shared/site-footer"

interface OverviewLayoutProps {
  children: React.ReactNode
}

export default async function OverviewLayout({
  children,
}: OverviewLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
