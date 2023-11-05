import { DashboardFooter } from '@/components/dashboardFooter'
import { SidebarSmall } from '@/components/sidebarSmall'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn('flex h-full flex-grow justify-between bg-[#F9FAFB]', className)} {...props}>
            <SidebarSmall />
            <main className="flex w-full flex-grow flex-col ">
                {children}
                <DashboardFooter />
            </main>
            <Toaster />
        </div>
    )
}
