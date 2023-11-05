import { Card, CardContent } from '@/ui/card'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface StatsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const Stats: FC<StatsProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn('', className)} {...props}>
            <Card className="h-full overflow-hidden rounded-[10px] border border-slate-300 bg-slate-50">
                <CardContent className="h-full p-0">{children}</CardContent>
            </Card>
        </div>
    )
}
