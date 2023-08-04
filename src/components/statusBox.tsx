import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface StatusBoxProps extends HTMLAttributes<HTMLDivElement> {
    label: string
    icon: string
    iconBg?: string
    description: string | ReactNode
    labelClass?: string
    descriptionClass?: string
}

export const StatusBox: FC<StatusBoxProps> = ({ className, label, icon, iconBg, description, descriptionClass, labelClass, ...props }) => {
    return (
        <div className={cn('flex items-center justify-center space-x-[10px] bg-[#F0F8FF] p-3 ', className)} {...props}>
            <div className={cn('flex h-7 w-7 items-center justify-center rounded-full', iconBg)}>
                <img src={icon} alt="icon" />
            </div>
            <div className="flex flex-grow flex-col space-y-[3px]">
                <p className={cn('text-xs font-semibold uppercase text-[#6E6893]', labelClass)}>{label}</p>
                <p className={cn('text-sm font-semibold text-[#3C3E42]', descriptionClass)}>{description}</p>
            </div>
        </div>
    )
}
