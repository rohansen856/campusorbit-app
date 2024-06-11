import Sidebar from "./components/admin-sidebar"
import { AdminSidebarPadding } from "./components/admin-sidebar-padding"

interface AdminLayoutProps {
  children?: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="relative flex h-full overflow-hidden bg-background">
      <Sidebar />
      <AdminSidebarPadding />
      <main
        id="content"
        className={`h-full overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0`}
      >
        {children}
      </main>
    </div>
  )
}
