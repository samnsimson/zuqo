import { AddCircle, ChatBubbleIcon, FileQuestion, PhoneCall, PlaySquare, ThreeDots } from '@/assets/svg/icons'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react'

interface RecentWorkflowsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

type WorkFlow = {
    title: string
    status: string
    period: string
    desc: string
    deployed: boolean
    deployStatus: string
    icon: ReactNode
    iconBg: string
}

export const RecentWorkflows: FC<RecentWorkflowsProps> = ({ ...props }) => {
    const [workflows, setWorkflows] = useState<WorkFlow[]>([])

    useEffect(() => {
        setWorkflows([
            {
                title: 'My First IVR Flow',
                status: 'DRAFT',
                period: 'Since Jul 20',
                desc: 'Description of workflow comes here in max of two lines with ellipses',
                deployed: false,
                deployStatus: 'Not yet deployed',
                icon: <PhoneCall />,
                iconBg: 'bg-[#D7ECE7]',
            },
            {
                title: 'Messaging Bot',
                status: 'LIVE',
                period: 'Since May 28',
                desc: 'Description of workflow comes here in max of two lines with ellipses',
                deployed: true,
                deployStatus: 'Deployed on May 30',
                icon: <ChatBubbleIcon />,
                iconBg: 'bg-[#E7ECD7]',
            },
            {
                title: 'Customer Survey',
                status: 'REVIEW',
                period: 'Since May 28',
                desc: 'Description of workflow comes here in max of two lines with ellipses',
                deployed: false,
                deployStatus: 'Not yet deployed',
                icon: <FileQuestion />,
                iconBg: 'bg-[#D7D9EC]',
            },
        ])
    }, [])

    return (
        <div className="flex w-full flex-col justify-start gap-4" {...props}>
            <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-black">Recent Workflows</div>
                <div className="inline-flex h-6 w-[114px] items-center justify-start gap-[29px]">
                    <div className="text-base font-semibold text-sky-600">View All</div>
                    <div className="relative h-6 w-6">
                        <AddCircle />
                    </div>
                </div>
            </div>
            <div className="relative inline-flex h-[318px] w-full flex-col items-start justify-start gap-3">
                {workflows.map((wf, key) => (
                    <div key={key} className="flex flex-col items-center justify-center gap-2.5 rounded bg-white px-6 py-3 shadow">
                        <div className="relative h-[74px] w-[919px]">
                            <div className={cn('absolute left-0 top-[13px] inline-flex h-12 w-12 items-center justify-center gap-2.5 rounded p-3', wf.iconBg)}>
                                <div className="relative h-6 w-6">{wf.icon}</div>
                            </div>
                            <div className="absolute left-[71px] top-0 inline-flex h-[25px] items-center justify-start gap-3.5">
                                <div className="text-sm font-semibold text-sky-700">{wf.title}</div>
                                <div
                                    className={cn('flex items-center justify-center gap-2.5 rounded  bg-opacity-10 px-2.5 py-[5px]', {
                                        'bg-sky-600': wf.status === 'DRAFT',
                                        'bg-emerald-700': wf.status === 'LIVE',
                                        'bg-pink-700': wf.status === 'REVIEW',
                                    })}
                                >
                                    <div
                                        className={cn('text-xs font-bold tracking-[1.44px]', {
                                            'text-sky-600': wf.status === 'DRAFT',
                                            'text-emerald-700': wf.status === 'LIVE',
                                            'text-pink-700': wf.status === 'REVIEW',
                                        })}
                                    >
                                        {wf.status}
                                    </div>
                                </div>
                                <div className="text-sm font-semibold leading-snug text-gray-900 opacity-70">{wf.period}</div>
                            </div>
                            <div className="absolute left-[71px] top-[30px] w-[330px] text-sm font-normal leading-snug text-gray-900 opacity-70">{wf.desc}</div>
                            <div className="absolute left-[717px] top-[1px] h-[67px] w-[202px]">
                                <div className="absolute left-0 top-0 inline-flex flex-col items-center justify-start gap-1">
                                    <div className="inline-flex h-12 w-12 items-center justify-center gap-2.5 rounded-[100px] bg-white p-1">
                                        <div className="relative h-6 w-6">
                                            <PhoneCall />
                                        </div>
                                    </div>
                                    <div className="text-center text-xs font-medium text-gray-900">EDIT</div>
                                </div>
                                <div className="absolute left-[73px] top-0 inline-flex flex-col items-center justify-start gap-1">
                                    <div className="inline-flex h-12 w-12 items-center justify-center gap-2.5 rounded-[100px] bg-white p-1">
                                        <div className="relative h-6 w-6">
                                            <PlaySquare />
                                        </div>
                                    </div>
                                    <div className="text-center text-xs font-medium text-gray-900">TEST</div>
                                </div>
                                <div className="absolute left-[146px] top-0 inline-flex flex-col items-center justify-start gap-1">
                                    <div className="inline-flex h-12 w-12 items-center justify-center gap-2.5 rounded-[100px] bg-white p-1">
                                        <div className="relative h-6 w-6">
                                            <ThreeDots />
                                        </div>
                                    </div>
                                    <div className="text-center text-xs font-medium text-gray-900">MORE</div>
                                </div>
                            </div>
                            <div
                                className={cn(
                                    'absolute left-[531px] top-[30px] text-center text-xs font-medium opacity-70',
                                    wf.deployed ? 'text-pink-700' : 'text-gray-900'
                                )}
                            >
                                {wf.deployStatus}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
