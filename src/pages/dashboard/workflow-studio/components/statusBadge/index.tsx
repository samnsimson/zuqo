import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useMemo } from 'react'

interface StatusBadgeProps extends HTMLAttributes<HTMLDivElement> {
    status: string
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status, className, ...props }) => {
    const badgeColor = useMemo(() => {
        switch (status.toUpperCase()) {
            case 'DRAFT':
                return 'text-sky-600 bg-sky-600 hover:bg-sky-600'
            case 'LIVE':
                return 'text-green-700 bg-green-700 hover:bg-green-700'
            case 'UNDER REVIEW':
                return 'text-pink-700 bg-pink-700 hover:bg-pink-700'
            default:
                break
        }
    }, [status])

    return (
        <Badge
            className={cn('rounded bg-opacity-10 px-2.5 py-[5px] text-xs font-bold uppercase tracking-[1.44px] hover:bg-opacity-20', badgeColor, className)}
            {...props}
        >
            {status}
        </Badge>
    )
}
