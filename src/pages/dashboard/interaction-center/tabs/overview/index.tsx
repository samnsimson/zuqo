import { StartRattings } from '@/components/rattings'
import { StatusBox } from '@/components/statusBox'
import { FC } from 'react'
import { AgentInsights } from '../../../../../components/agentInsights'
import { VoiceConversations } from '@/components/voiceConversations'
import { CustomerInsights } from '@/components/customerInsights'
import { assets } from '@/config/assets'
import { EmailConversations } from '@/components/emailConversations'
import { ChatConversations } from '@/components/chatConversations'
import { useLocation } from 'react-router-dom'
import { useFetchInteractionData } from '@/api/queries'
import { Loading } from '@/components/loading'
import { cn } from '@/lib/utils'
interface OverviewTabContentProps {
    [x: string]: any
    channel: string | null
}

type ChannelSwitchProps = {
    channel: string | null
    data: any
}

const SwitchChannels: FC<ChannelSwitchProps> = ({ channel, data }) => {
    if (!channel) return
    switch (channel.toLowerCase()) {
        case 'email':
            return <EmailConversations className="bg-[#FEFFF6]" data={data} />
        case 'voicecallchat':
        case 'voicecallchatoutbound':
            return <VoiceConversations className="bg-[#F6FFF9]" data={data} />
        case 'whatsapp':
            return <ChatConversations className="bg-[#FFFDF6] pb-10" data={data} />
    }
}

const SentimentScore = ({ data }: any) => {
    if (!data['result'] || !data.result['overall_sentiment']) return null
    const { score, label } = data.result.overall_sentiment || { score: 0, label: null }

    const getSentimentScore = (score: number) => {
        if (!score) return 0
        return `${Math.ceil(score * 100)}%`
    }

    const getColorScheme = (sentiment: string) => {
        switch (sentiment) {
            case 'positive':
                return 'text-[#008344]'
            case 'negative':
                return 'text-red-500'
            case 'neutral':
                return 'text-amber-500'
            default:
                return 'text-grey-600'
        }
    }

    return (
        <div className="grid gap-y-1">
            <div className="flex space-x-3">
                <img src={assets.faceSmileRegular} alt="emoji" />
                <p className={cn(getColorScheme(label))}>
                    <span className="text-2xl font-bold">{getSentimentScore(score)}</span> <br /> <span className="font-semibold">{label.toUpperCase()}</span>
                </p>
            </div>
            <div>
                <p className="text-sm font-semibold uppercase text-[#6E6893]">Overall Sentiment</p>
            </div>
        </div>
    )
}

export const OverviewTabContent: FC<OverviewTabContentProps> = ({ channel }) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get('ccid') || ''
    const { data, isLoading, isError } = useFetchInteractionData({ id })

    if (isLoading) return <Loading />
    if (isError) return <div>Error...</div>

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
                    <SentimentScore data={data} />
                    <StartRattings rating={3.5} label="Overall call rating" />
                </div>
            </div>
            <div className="col-span-12 h-full">
                <div className="grid h-full grid-cols-2 gap-x-5">
                    <div className="col-span-1">
                        <SwitchChannels channel={channel} data={data} />
                    </div>
                    <div className="col-span-1 grid grid-cols-1">
                        <div className="flex flex-col space-y-5">
                            <CustomerInsights className="bg-[#EEF2F3]" />
                            <AgentInsights className="bg-gradient-to-b from-[#F3EEF2] to-[#f7f9fbab]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
