import { Card, CardContent } from '@/ui/card'
import { FC, HTMLAttributes } from 'react'
import { InteractionsHandled } from './interactionsHandled'
import { Chart, ChartType } from '@/components/chart'
import { useChartData } from '@/hooks/useChartData'
import { InteractionsBoundData } from '@/mock-data/chart-data'
import { InteractionInfo } from './interactionInfo'
import { PhoneVolumeRegular } from '@/assets/svg/icons'

interface InteractionOverviewStatProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const InteractionOverviewStat: FC<InteractionOverviewStatProps> = ({ ...props }) => {
    const { dataset } = useChartData({ type: 'DOUGHNUT', data: InteractionsBoundData, labelType: 'line', name: 'Bound data', labelPosition: 'outside' })
    const interactionsInfoData = [
        {
            name: 'Voice',
            icon: <PhoneVolumeRegular />,
            value: 179,
        },
        {
            name: 'Web Chat',
            icon: <PhoneVolumeRegular />,
            value: 45,
        },
        {
            name: 'Mobile Chat',
            icon: <PhoneVolumeRegular />,
            value: 180,
        },
        {
            name: 'WhatsApp',
            icon: <PhoneVolumeRegular />,
            value: 146,
        },
        {
            name: 'Video Chat',
            icon: <PhoneVolumeRegular />,
            value: 179,
        },
        {
            name: 'Social Messaging',
            icon: <PhoneVolumeRegular />,
            value: 170,
        },
    ]
    return (
        <Card {...props}>
            <CardContent className="grid grid-cols-1 gap-x-10 px-[18px] py-4 md:grid-cols-12">
                <div className="col-span-3">
                    <InteractionsHandled
                        label="Interactions Handled"
                        actual={899}
                        total={1033}
                        data={[
                            { name: 'Automation', value: 72 },
                            { name: 'Human', value: 28 },
                        ]}
                    />
                </div>
                <div className="col-span-5">
                    <Chart dataSet={dataset} type={ChartType.PIE} height={100} className="w-full" />
                </div>
                <div className="col-span-4">
                    <InteractionInfo data={interactionsInfoData} />
                </div>
            </CardContent>
        </Card>
    )
}
