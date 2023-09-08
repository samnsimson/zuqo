import { FC, HTMLAttributes } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { cn } from '@/lib/utils'
import { MenuVertical } from '@/assets/svg/icons'

interface ChartContainerProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
}

export const ChartContainer: FC<ChartContainerProps> = ({ className, title, children, ...props }) => {
    return (
        <div className={cn('', className)} {...props}>
            <Card className="h-full space-y-3 rounded-lg border-[1px] border-[#C8C8C8] bg-white p-0 py-3 shadow">
                <div className="flex items-center justify-between">
                    {title && <CardHeader className="flex-1 px-8 py-0 text-base font-semibold leading-normal text-indigo-950">{title}</CardHeader>}
                    <div className="pr-[27px]">
                        <MenuVertical className="h-6 w-6 pr-[27px]" />
                    </div>
                </div>
                <CardContent className="py-0">{children}</CardContent>
            </Card>
        </div>
    )
}
