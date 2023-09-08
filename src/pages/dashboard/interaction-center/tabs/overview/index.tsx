import { StartRattings } from '@/components/rattings'
import { StatusBox } from '@/components/statusBox'
import { FC } from 'react'
import { AgentInsights } from '../../../../../components/agentInsights'
import { VoiceConversations } from '@/components/voiceConversations'
import { CustomerInsights } from '@/components/customerInsights'
import { assets } from '@/config/assets'
interface OverviewTabContentProps {
    [x: string]: any
}

export const OverviewTabContent: FC<OverviewTabContentProps> = () => {
    return (
        <div className="grid w-full grid-cols-12 items-center gap-y-[30px]">
            <div className="col-span-9">
                <div className="flex space-x-4">
                    <StatusBox label="Duration" description="30 mins" icon={assets.durationIcon} iconBg="" />
                    <StatusBox label="Hold Time" description="1 mins" icon={assets.holdTimeIcon} iconBg="" />
                    <StatusBox label="Talk Time" description="28 mins" icon={assets.talkTimeIcon} iconBg="" />
                    <StatusBox label="Transfer Rate" description="LOW, 10%" icon={assets.transferRateIcon} iconBg="" />
                    <StatusBox label="FCR" description="38%" icon={assets.fcrIcon} iconBg="" />
                    <StatusBox label="Call Outcome" description="Complaint resolution" icon={assets.callOutcomeIcon} iconBg="" />
                    <StatusBox label="Call Intent" description="Product Pricing Inquiry" icon={assets.callIntentIcon} descriptionClass="text-[#C61764]" />
                </div>
            </div>
            <div className="col-span-3">
                <div className="grid grid-cols-2">
                    <div className="grid gap-y-1">
                        <div className="flex space-x-3">
                            <img src={assets.faceSmileRegular} alt="emoji" />
                            <p className="text-[#008344]">
                                <span className="text-2xl font-bold">98.6</span> <br /> <span className="font-semibold">Positive</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold uppercase text-[#6E6893]">Overall Sentiment</p>
                        </div>
                    </div>
                    <StartRattings rating={3.5} label="Overall call rating" />
                </div>
            </div>
            <div className="col-span-12 h-full">
                <div className="grid h-full grid-cols-2 gap-x-5">
                    <div className="col-span-1">
                        <VoiceConversations className="bg-[#F6FFF9]" />
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <CustomerInsights className="bg-[#EEF2F3]" />
                        <AgentInsights className="bg-gradient-to-b from-[#F3EEF2] to-[#f7f9fbab]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
