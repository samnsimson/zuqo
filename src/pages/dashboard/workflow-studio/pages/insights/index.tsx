import { BotIcon, CameraIcon, InboundIcon, IvrPhoneIcon, OutboundIcon, SubtaskIcon } from '@/assets/svg/icons'
import { InsightCard } from '@/components/insightCard'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface InsightsPageProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const InsightsPage: FC<InsightsPageProps> = ({ className, ...props }) => {
    return (
        <div {...props} className={cn('py-5', className)}>
            <div className="text-xl font-semibold text-sky-700">Workflow Studio Insights Dashboard</div>
            <div className="text-xs font-normal text-black">
                Unlock Real-time Performance Metrics and Analytics for Your Workflows. Monitor, Optimize, and Excel!
            </div>
            <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
                <InsightCard
                    icon={<IvrPhoneIcon />}
                    iconBg="bg-yellow-600"
                    primaryColor="text-yellow-600"
                    title="IVR"
                    description="Streamline interactions. Enhance efficiency."
                    dataset={[
                        { name: 'Draft', value: 4, color: '#38BDF8' },
                        { name: 'Pending Approvals', value: 1, color: '#F87171' },
                        { name: 'Approved', value: 3, color: '#4ADE80' },
                        { name: 'Live', value: 8, color: '#FACC15' },
                    ]}
                />
                <InsightCard
                    icon={<BotIcon />}
                    iconBg="bg-lime-600"
                    primaryColor="text-lime-600"
                    title="Messaging Bots"
                    description="Optimize engagement with Messaging Bot workflows"
                    dataset={[
                        { name: 'Draft', value: 3, color: '#38BDF8' },
                        { name: 'Pending Approvals', value: 4, color: '#F87171' },
                        { name: 'Approved', value: 10, color: '#4ADE80' },
                        { name: 'Live', value: 14, color: '#FACC15' },
                    ]}
                />
                <InsightCard
                    icon={<CameraIcon />}
                    iconBg="bg-sky-600"
                    primaryColor="text-sky-600"
                    title="Campaigns"
                    description="Drive success with Campaigns workflows."
                    dataset={[
                        { name: 'Draft', value: 10, color: '#38BDF8' },
                        { name: 'Pending Approvals', value: 1, color: '#F87171' },
                        { name: 'Approved', value: 1, color: '#4ADE80' },
                        { name: 'Live', value: 0, color: '#FACC15' },
                    ]}
                />
                <InsightCard
                    icon={<InboundIcon />}
                    iconBg="bg-cyan-500"
                    primaryColor="text-cyan-500"
                    title="Inbound"
                    description="Simplify Inbound Workflows. Maximize Impact."
                    dataset={[
                        { name: 'Draft', value: 4, color: '#38BDF8' },
                        { name: 'Pending Approvals', value: 1, color: '#F87171' },
                        { name: 'Approved', value: 3, color: '#4ADE80' },
                        { name: 'Live', value: 8, color: '#FACC15' },
                    ]}
                />
                <InsightCard
                    icon={<OutboundIcon />}
                    iconBg="bg-rose-700"
                    primaryColor="text-rose-700"
                    title="Outbound"
                    description="Drive engagement with outbound workflows."
                    dataset={[
                        { name: 'Draft', value: 4, color: '#38BDF8' },
                        { name: 'Pending Approvals', value: 1, color: '#F87171' },
                        { name: 'Approved', value: 3, color: '#4ADE80' },
                        { name: 'Live', value: 8, color: '#FACC15' },
                    ]}
                />
                <InsightCard
                    icon={<SubtaskIcon />}
                    iconBg="bg-purple-700"
                    primaryColor="text-purple-700"
                    title="Process"
                    description="Simplify processes. Amplify results. Process flows at your fingertips."
                    dataset={[
                        { name: 'Draft', value: 0, color: '#38BDF8' },
                        { name: 'Pending Approvals', value: 0, color: '#F87171' },
                        { name: 'Approved', value: 0, color: '#4ADE80' },
                        { name: 'Live', value: 0, color: '#FACC15' },
                    ]}
                />
            </div>
        </div>
    )
}
