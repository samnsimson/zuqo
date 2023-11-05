import { Progress } from '@/ui/progress'
import { FC, HTMLAttributes } from 'react'

interface InteractionsHandledProps extends HTMLAttributes<HTMLDivElement> {
    label: string
    actual: number
    total: number
    data: Array<{
        name: string
        value: number
    }>
}

export const InteractionsHandled: FC<InteractionsHandledProps> = ({ label, actual, total, data, ...props }) => {
    return (
        <div className="w-full space-y-2" {...props}>
            <div className="flex items-center space-x-[5px]">
                <p>
                    <span className="font-semibold text-[#015EB0]">{actual}</span> of {total}
                </p>
                <p className="font-semibold">{Math.round((actual / total) * 100)}%</p>
            </div>
            <div className="text-sm font-semibold uppercase leading-[21px] text-[#3C3E42]">{label}</div>
            <div className="space-y-[2px] text-xs tracking-[0.6px]">
                <Progress value={data[0].value} className="h-[9px] bg-[#C61764]" color="#015EB0" />
                <div className="flex items-center justify-between">
                    <div className="text-left">
                        <p>{data[0].name}</p>
                        <p>{data[0].value}%</p>
                    </div>
                    <div className="text-right">
                        <p>{data[1].name}</p>
                        <p>{data[1].value}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
