import { Chart, ChartType } from '@/components/chart'
import { useChartData } from '@/hooks/useChartData'
import { conversationIntentData } from '@/mock-data/chart-data'
import { FC, HTMLAttributes } from 'react'

interface ConversationIntentProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const ConversationIntent: FC<ConversationIntentProps> = ({ ...props }) => {
    const { dataset } = useChartData({ type: 'DOUGHNUT', data: conversationIntentData, name: 'Conversation Intent', labelType: 'none' })
    return (
        <div {...props}>
            <div className="grid grid-cols-12 gap-x-10">
                <div className="col-span-6 flex items-center justify-start">
                    <ul className="w-full space-y-[14px]">
                        {conversationIntentData.map((data) => (
                            <li className="flex items-center space-x-[6px] font-inter text-sm text-[#5D6881]">
                                <div className="h-[13px] w-3 rounded-sm" style={{ backgroundColor: data.color }} />
                                <div className="flex-1">{data.name}</div>
                                <div className="font-bold">{data.value}%</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-6">
                    <Chart dataSet={dataset} width={370} height={250} type={ChartType.DOUGHNUT} showCount={false} />
                </div>
            </div>
        </div>
    )
}
