import { FC, HTMLAttributes } from 'react'
import { Stats } from './components/stats'
import { StackIcon } from '@/assets/svg/icons'
import { ArrowUp } from 'lucide-react'
import { useChartData } from '@/hooks/useChartData'
import { doughnutChartDataInbound, doughnutChartDataOutbound } from '@/mock-data/chart-data'
import { Chart, ChartType } from '@/components/chart'

interface AiAnalyticsSectionProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const AiAnalyticsSection: FC<AiAnalyticsSectionProps> = ({ ...props }) => {
    const { dataset: inboundDataSet } = useChartData({ type: 'DOUGHNUT', data: doughnutChartDataInbound, name: 'Inbound', labelType: 'line' })
    const { dataset: outBoundDataSet } = useChartData({ type: 'DOUGHNUT', data: doughnutChartDataOutbound, name: 'Outbound', labelType: 'line' })
    return (
        <div {...props} className="grid grid-cols-12 gap-5">
            <div className="col-span-full text-base font-bold text-sky-700">AI Analytics</div>
            <Stats className="col-span-2 h-full">
                <div className="flex flex-col items-center bg-[#FAFEFF] p-2 px-[31px] ">
                    <div className="font-jakarta text-xl font-medium leading-[30px] text-neutral-700">Total Interactions</div>
                    <div className="flex items-center justify-between space-x-5">
                        <div className="rounded-full bg-[#CDECFA] p-2">
                            <StackIcon />
                        </div>
                        <div className="font-inter text-[42px] font-extrabold leading-[63px] text-pink-700">899</div>
                    </div>
                    <div className="flex items-center">
                        <ArrowUp width={20} height={20} color="#008344" fontSize={14} />
                        <p className="font-jakarta">
                            <span className="text-base font-bold leading-normal text-emerald-700">1.9%</span>
                            <span className="text-base font-medium leading-normal text-neutral-700"> vs last 7 days</span>
                        </p>
                    </div>
                </div>
            </Stats>
            <Stats className="col-span-5 bg-white">
                <div className="grid h-full grid-cols-5 bg-[#FFFFFA] p-2 px-[31px] ">
                    <div className="col-span-2 flex flex-col self-center">
                        <div className="text-base font-semibold leading-normal text-neutral-700">Inbound</div>
                        <div className="flex items-baseline space-x-2.5">
                            <div className="text-[32px] font-semibold leading-[48px] text-[#015EB0]">540</div>
                            <div className="text-base font-bold leading-normal text-black">60%</div>
                            <div className="flex h-[29px] w-[29px] rotate-[210deg] items-center justify-center rounded-full bg-slate-300">
                                <ArrowUp color="#015EB0" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <ArrowUp width={20} height={20} color="#008344" fontSize={14} />
                            <p className="font-jakarta">
                                <span className="text-base font-bold leading-normal text-emerald-700">3.2%</span>
                                <span className="text-base font-medium leading-normal text-neutral-700"> vs last 7 days</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-3 place-self-center">
                        {inboundDataSet && <Chart name="Inbound" dataSet={inboundDataSet} width={400} height={120} type={ChartType.DOUGHNUT} />}
                    </div>
                </div>
            </Stats>
            <Stats className="col-span-5 bg-white">
                <div className="grid h-full grid-cols-5 bg-[#FDFAFF] p-2 px-[31px] ">
                    <div className="col-span-2 flex flex-col self-center">
                        <div className="text-base font-semibold leading-normal text-neutral-700">Outbound</div>
                        <div className="flex items-baseline space-x-2.5">
                            <div className="text-[32px] font-semibold leading-[48px] text-[#015EB0]">359</div>
                            <div className="text-base font-bold leading-normal text-black">40%</div>
                            <div className="flex h-[29px] w-[29px] rotate-[30deg] items-center justify-center rounded-full bg-slate-300">
                                <ArrowUp color="#015EB0" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <ArrowUp width={20} height={20} color="#008344" fontSize={14} />
                            <p className="font-jakarta">
                                <span className="text-base font-bold leading-normal text-emerald-700">1.2%</span>
                                <span className="text-base font-medium leading-normal text-neutral-700"> vs last 7 days</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-span-3 place-self-center">
                        {outBoundDataSet && <Chart name="Inbound" dataSet={outBoundDataSet} width={400} height={120} type={ChartType.DOUGHNUT} />}
                    </div>
                </div>
            </Stats>
        </div>
    )
}
