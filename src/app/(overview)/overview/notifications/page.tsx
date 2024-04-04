import { AllNotifications } from "./components/all-notifications"
import { NotificationHeader } from "./components/header"

export default async function NotificationsPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-[700px] p-4">
        <div className="w-full px-4">
          <NotificationHeader />
        </div>
        <AllNotifications />
      </div>
    </div>
  )
}
