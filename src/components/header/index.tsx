import { HeaderVariants, headerVariants } from '@/lib/ui/variants/header'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { UserProfile } from '../userProfile'
import { cn } from '@/lib/utils'
import { HelpIcon, NotificationBellIcon } from '@/assets/svg/icons'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const Header: FC<HeaderProps & HeaderVariants> = ({ variant, children, className }) => {
    return (
        <div className={cn('flex justify-between', headerVariants({ variant, className }))}>
            <div className="flex items-center gap-4">{children}</div>
            <div className="header-action flex items-center gap-x-8">
                <HelpIcon />
                <NotificationBellIcon />
                <UserProfile />
            </div>
        </div>
    )
}
