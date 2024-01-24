import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { auth } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const session = await auth()

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <SiteFooter className="bg-background" />
        </div>
    )
}
