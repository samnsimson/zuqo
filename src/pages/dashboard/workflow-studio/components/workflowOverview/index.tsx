import { Chart, ChartType, PiechartDataSet } from '@/components/chart'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useState } from 'react'

interface WorkflowOverviewProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const OverviewTitle: FC<{ title: string }> = ({ title }) => {
    return <div className="mb-6 text-left text-lg font-medium text-black">{title}</div>
}

export const WorkflowOverview: FC<WorkflowOverviewProps> = ({ className, ...props }) => {
    const [pieChartData, setPieChartData] = useState<PiechartDataSet[]>([])
    const [progressList, setProgressList] = useState<{ name: string; value: number }[]>([])

    useEffect(() => {
        setPieChartData([
            { value: 12, name: 'Deployed', color: '#9DF19C' },
            { value: 2, name: 'Review Pending', color: '#ECBAAA' },
            { value: 4, name: 'Draft', color: '#B1B0F5' },
        ])
    }, [])

    useEffect(() => {
        setProgressList([
            { name: 'IVR', value: 50 },
            { name: 'Inbound Voice', value: 30 },
            { name: 'Outbound Voice', value: 60 },
            { name: 'Messaging Bot', value: 80 },
            { name: 'Email', value: 20 },
            { name: 'Survey Designer', value: 90 },
            { name: 'Agent Script', value: 40 },
            { name: 'Campaigns', value: 40 },
            { name: 'Orchestration', value: 60 },
        ])
    }, [])

    return (
        <div className={cn('relative grid grid-cols-12 gap-[90px] bg-rectangleBg1 bg-cover bg-center bg-no-repeat px-[65px] py-4', className)} {...props}>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-auto bg-rectangleBg1 bg-cover bg-no-repeat" />
            <div className="absolute bottom-0 left-0 right-0 top-0 z-auto bg-gradient-to-b from-blue-50/30 to-white/80" />
            <div className="z-[5] col-span-7 grid grid-cols-1">
                <OverviewTitle title="Workflow Metrics" />
                <div className="grid grid-cols-2 gap-[51px]">
                    <div className="grid grid-cols-2 gap-[60px]">
                        <div className="col-span-1 flex items-center justify-center">
                            <Chart width={250} height={250} name="Workflow Overview" type={ChartType.DOUGHNUT} dataSet={pieChartData} />
                        </div>
                        <div className="col-span-1 flex flex-col space-y-4">
                            <div className="border-b border-b-stone-300 py-2.5">
                                <div className="text-right text-base font-semibold text-gray-900">Total Workflows</div>
                                <div className="text-right text-2xl font-bold text-pink-700">{pieChartData.reduce((a, b) => a + b.value, 0)}</div>
                            </div>
                            <div className="flex h-24 w-full flex-col items-end justify-end gap-4">
                                {pieChartData.map((data, key) => (
                                    <div className="flex h-5 w-full items-center justify-end" key={key}>
                                        <div className="text-base font-semibold text-gray-900 opacity-60">{data.name}</div>
                                        <div className="ml-[7px] mr-[18px] h-3 w-3" style={{ backgroundColor: data.color }} />
                                        <div className="w-4 text-right text-base font-semibold text-gray-900">{data.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-end justify-end border-t border-t-stone-300 py-2.5">
                                <div className="text-sm font-semibold text-gray-900">Assigned to you</div>
                                <div className="text-xl font-bold text-sky-700">03</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <table className="border-separate border-spacing-x-[13px]">
                            <tbody>
                                {progressList.map((progress, key) => (
                                    <tr key={key}>
                                        <td className="whitespace-nowrap">
                                            <p className="text-right text-xs font-normal leading-[27px] text-black">{progress.name}</p>
                                        </td>
                                        <td width={'100%'}>
                                            <div
                                                className="h-[13px] rounded-[10px] bg-gradient-to-l from-[#015EB0] to-[#3393E8]"
                                                style={{ width: `${progress.value}%` }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="z-[5] col-span-5">
                <OverviewTitle title="Real-Time Live Workflows Overview" />
                <div className="grid w-full grid-cols-2 gap-x-[84px] gap-y-8">
                    <div className="space-y-[11px]">
                        <div className="text-base font-medium text-gray-900 opacity-60">Active Workflows in Production</div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-lg font-medium text-gray-900">IVR: </span>
                                <span className="text-lg font-semibold text-pink-700">03</span>
                            </div>
                            <div>
                                <span className="text-lg font-medium text-gray-900">Message Bots: </span>
                                <span className="text-lg font-semibold text-pink-700">02</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[11px]">
                        <div className="text-base font-medium text-gray-900 opacity-60">Success Rate</div>
                        <div className="text-lg font-semibold text-pink-700">89%</div>
                    </div>
                    <div className="space-y-[11px]">
                        <div className="text-base font-medium text-gray-900 opacity-60">Successful Interactions</div>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-lg font-medium text-gray-900">IVR: </span>
                                <span className="text-lg font-semibold text-pink-700">335</span>
                            </div>
                            <div>
                                <span className="text-lg font-medium text-gray-900">Message Bots: </span>
                                <span className="text-lg font-semibold text-pink-700">938</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[11px]">
                        <div className="text-base font-medium text-gray-900 opacity-60">Unresponsive Workflows</div>
                        <div className="text-lg font-semibold text-pink-700">None</div>
                    </div>
                    <div className="space-y-[11px]">
                        <div className="text-base font-medium text-gray-900 opacity-60">Errors</div>
                        <div className="text-lg font-semibold text-red-600">04</div>
                    </div>
                    <div className="space-y-[11px]">
                        <div className="inline-flex h-[35px] w-[214px] items-center justify-center gap-2.5 rounded-md bg-[#F3F6FF] px-5 py-2.5">
                            <div className="text-xs font-semibold text-sky-600">Monitor Real -Time Workflows</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
