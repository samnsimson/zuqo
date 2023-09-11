import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface ActionButtonProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode
    color?: string
    label: string | null
}

export const ActionButton: FC<ActionButtonProps> = ({ label, icon, className, color, ...props }) => {
    return (
        <div {...props} className={cn('flex cursor-pointer flex-col items-center justify-center space-y-4', className)}>
            <div>{icon}</div>
            {label && <div className={cn('text-center text-xs font-medium uppercase', color || 'text-gray-900')}>{label}</div>}
        </div>
    )
}
