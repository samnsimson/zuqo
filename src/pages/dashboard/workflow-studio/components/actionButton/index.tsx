import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ActionButtonProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode
    color?: string
    label: string | null
    actionId?: string | number
    channel?: string
}

export const ActionButton: FC<ActionButtonProps> = ({ label, icon, className, color, actionId, channel, ...props }) => {
    return (
        <div {...props} className={cn('flex cursor-pointer flex-col items-center justify-center space-y-4', className)}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div>{icon}</div>
                    {label && <div className={cn('text-center text-xs font-medium uppercase', color || 'text-gray-900')}>{label}</div>}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link to={`/interaction-center/conversation?customerId=${actionId}&channel=${channel}`}>View</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
