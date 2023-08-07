import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface TabContentSectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    label: string
    icon?: string
}

export const TabContentSectionHeader: FC<TabContentSectionHeaderProps> = ({ className, label, icon = null, ...props }) => {
    return (
        <div className={cn('flex items-center space-x-3', className)} {...props}>
            {icon && <img src={icon} alt="call-icon" />}
            <p className="font-inter text-sm font-bold uppercase text-color-swatch-blue-foreground">{label}</p>
        </div>
    )
}
