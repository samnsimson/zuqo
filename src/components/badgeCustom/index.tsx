import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface BadgeCustomProps extends HTMLAttributes<HTMLDivElement> {
    value: string | number
}

export const BadgeCustom: FC<BadgeCustomProps> = ({ value, className, ...props }) => {
    return (
        <div className={cn('inline-flex h-[25px] items-center justify-center gap-2.5 rounded bg-gray-50 px-2.5 py-[5px]', className)} {...props}>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">{value}</div>
        </div>
    )
}
