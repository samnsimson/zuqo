import { FC, HTMLAttributes } from 'react'
import { CardHeader, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'
import { Hint } from '../hint'
import { assets } from '@/config/assets'

interface SummaryCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title: string
    showMaximizeIcon?: boolean
}

const toolTip = (
    <div className="w-6">
        <img src={assets.maximizeIcon} alt="maximize-icon" />
    </div>
)

export const SummaryCardHeader: FC<SummaryCardHeaderProps> = ({ className, title, showMaximizeIcon = true, ...props }) => {
    return (
        <CardHeader className={cn('flex flex-row items-center justify-between gap-[5px] p-5', className)} {...props}>
            <div className="w-6 cursor-move">
                <img src={assets.dragVertical} alt="drag" />
            </div>
            <CardTitle className="!mt-0 flex-grow font-jakarta text-base font-thin ">{title}</CardTitle>
            {showMaximizeIcon && <Hint title={toolTip} hint="Maximize" />}
        </CardHeader>
    )
}
