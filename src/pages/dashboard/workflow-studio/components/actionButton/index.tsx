/* eslint-disable no-case-declarations */
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ActionButtonBaseProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode
    color?: string
    label: string | null
    actionId?: string | number
    channel?: string
}

interface ActionButtonMenuTypeProps {
    type: 'menu'
}

interface ActionButtonLinkTypeProps {
    type: 'link'
    link: string
}

type ActionButtonProps = Omit<ActionButtonBaseProps, 'onClick'> & (ActionButtonMenuTypeProps | ActionButtonLinkTypeProps)

export const ActionButton: FC<ActionButtonProps> = ({ type, label, icon, className, color, actionId, channel, ...props }) => {
    switch (type) {
        case 'menu':
            return (
                <div {...props} className={cn('flex cursor-pointer flex-col items-center justify-center space-y-4', className)}>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="space-y-4">
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
        case 'link':
            const { link } = props as ActionButtonLinkTypeProps
            return (
                <div {...props} className={cn('flex cursor-pointer flex-col items-center justify-center space-y-4', className)}>
                    <Link to={link} className="space-y-4">
                        <div>{icon}</div>
                        {label && <div>{label}</div>}
                    </Link>
                </div>
            )
        default:
            break
    }
}
