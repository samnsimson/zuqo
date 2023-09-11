import { PageSectionTitle } from '@/components/pageSectionTitle'
import { FC, HTMLAttributes } from 'react'
import { InteractionOverviewStat } from '../components/interactionOverviewStat'
import { InteractionsStat } from '../components/interactionsStat'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUp } from 'lucide-react'

interface InteractionCenterDashboardProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const StatHeading: FC<{ title: string }> = ({ title }) => (
    <div className="text-left text-sm font-semibold uppercase tracking-[0.7px] text-[#6E6893]">{title}</div>
)

export const InteractionCenterDashboard: FC<InteractionCenterDashboardProps> = ({ ...props }) => {
    return (
        <div {...props} className="my-[15px] grid grid-cols-1 gap-[18px] px-[56px]">
            <PageSectionTitle title="Interactions Dashboard" />
            <div className="grid grid-cols-12 gap-x-[18px]">
                <div className="col-span-9">
                    <InteractionOverviewStat />
                </div>
                <div className="col-span-3">
                    <InteractionsStat />
                </div>
            </div>
            <div className="flex items-center justify-between space-x-6">
                <Card className="rounded-sm bg-gradient-to-b from-orange-50 to-amber-100">
                    <CardContent className="space-y-[15px] p-5">
                        <StatHeading title="Average Handle Time" />
                        <div className="text-xl font-semibold leading-tight text-[#015EB0]">4m:32s</div>
                    </CardContent>
                </Card>
                <Card className="rounded-sm bg-gradient-to-b from-lime-50 to-lime-100">
                    <CardContent className="space-y-[15px] p-5">
                        <StatHeading title="Average Wait Time" />
                        <div className="text-xl font-semibold leading-tight text-[#015EB0]">1m:20s</div>
                    </CardContent>
                </Card>
                <Card className="rounded-sm bg-gradient-to-b from-violet-100 to-gray-300">
                    <CardContent className="space-y-[15px] p-5">
                        <StatHeading title="Abandonment Rate" />
                        <div className="text-xl font-semibold leading-tight text-[#015EB0]">16%</div>
                    </CardContent>
                </Card>
                <Card className="rounded-sm bg-gradient-to-b from-lime-50 to-orange-100">
                    <CardContent className="space-y-[15px] p-5">
                        <StatHeading title="Avg Transfer Rate" />
                        <div className="text-xl font-semibold leading-tight text-[#015EB0]">LOW, 8%</div>
                    </CardContent>
                </Card>
                <Card className="rounded-sm bg-gradient-to-b from-emerald-50 to-emerald-100">
                    <CardContent className="space-y-[15px] p-5">
                        <StatHeading title="Average Speed of Answer" />
                        <div className="flex items-center space-x-[5px]">
                            <div className="text-xl font-semibold leading-tight text-[#015EB0]">0m:22s</div>
                            <ArrowUp className="text-emerald-700" />
                            <div>
                                <span className="text-base font-bold leading-normal text-emerald-700">3.4%</span>
                                <span className="text-base font-medium leading-normal text-neutral-700"> vs last 10 days</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="rounded-sm bg-gradient-to-b from-pink-100 to-stone-200">
                    <CardContent className="space-y-[15px] p-5">
                        <StatHeading title="Average Utilization Rate" />
                        <div className="flex items-center space-x-[15px]">
                            <div className="text-base font-semibold leading-tight text-[#015EB0]">Avg: 55.8%</div>
                            <div className="text-base font-semibold leading-tight text-zinc-600">Min: 21%</div>
                            <div className="text-base font-semibold leading-tight text-zinc-600">Max: 79.2%</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
