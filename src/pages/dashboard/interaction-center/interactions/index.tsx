import { ChannelChat, ChannelEmail, ChannelPhone, FaceSadIcon, FaceSmileIcon, MoreFiltersIcon } from '@/assets/svg/icons'
import { ColumnProps, DataTable } from '@/components/dataTable'
import { PageSectionTitle } from '@/components/pageSectionTitle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { FC, HTMLAttributes, ReactNode, useMemo, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { assets } from '@/config/assets'
import { useFetchInteraction } from '@/api/queries'
import { cn, dateTime } from '@/lib/utils'

interface InteractionsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const Agent: FC<{ data: { avatar: string; name: string; email: string } }> = ({ data }) => {
    return (
        <div className="flex items-center space-x-3">
            <Avatar>
                <AvatarImage src={data.avatar} width={37} height={37} />
            </Avatar>
            <div className="flex flex-col space-y-[7px]">
                <p className="font-jakarta text-sm text-[#25213B]">{data.name}</p>
                <p className="text-[13px] text-[#5E5F62]">{data.email}</p>
            </div>
        </div>
    )
}

const Customer: FC<{ data: { avatar: string; name: string; phone: string } }> = ({ data }) => {
    return (
        <div className="flex items-center space-x-3">
            <Avatar>
                <AvatarImage src={data.avatar} width={37} height={37} />
            </Avatar>
            <div className="flex flex-col space-y-[7px]">
                <p className="font-jakarta text-sm text-[#25213B]">{data.name}</p>
                <p className="text-[13px] text-[#5E5F62]">{data.phone}</p>
            </div>
        </div>
    )
}

const Channel: FC<{ channel: string }> = ({ channel }) => {
    channel = channel?.toLowerCase()
    if (['phone', 'messenger', 'whatsapp', 'webchat'].includes(channel)) return <ChannelPhone />
    if (['email'].includes(channel)) return <ChannelEmail />
    if (['voicecallchat'].includes(channel)) return <ChannelChat />
    return null
}

const Type: FC<{ type: string }> = ({ type }) => {
    if (type === 'VoiceCallChat') type = 'INBOUND'
    if (type === 'VoiceCallChatOutbound') type = 'OUTBOUND'
    if (type === 'whatsapp') type = 'WEB CHAT'
    return (
        <div className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-gray-100 px-2.5 py-1">
            <div className="text-sm font-medium text-slate-800">{type}</div>
        </div>
    )
}

const Sentiment: FC<{ sentiment: string }> = ({ sentiment }) => {
    if (sentiment.toLowerCase() === 'positive')
        return (
            <div className="flex items-center gap-[5px]">
                <FaceSmileIcon />
                <Badge className="space-x-[5px] bg-[#F0FFF3] text-[#008344] hover:bg-[#F0FFF3]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#008344]" />
                    <span className="uppercase tracking-wide">{sentiment}</span>
                </Badge>
            </div>
        )

    if (sentiment.toLowerCase() === 'negative')
        return (
            <div className="flex items-center gap-[5px]">
                <FaceSadIcon />
                <Badge className="space-x-[5px] bg-[#FFE1E1] text-[#E50B0B] hover:bg-[FFE1E1]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#E50B0B]" />
                    <span className="uppercase tracking-wide">{sentiment}</span>
                </Badge>
            </div>
        )

    return <p className="text-center">-</p>
}

const PlaceHolder: FC = () => <Skeleton className="h-12 w-full" />

export const Interactions: FC<InteractionsProps> = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPagecount, setTotalPagecount] = useState(0)
    const { data, isLoading } = useFetchInteraction({ page: currentPage })
    const menuItem = [{ name: 'All' }, { name: 'Inbound' }, { name: 'Outbound' }]
    const buttonGroup = [{ name: 'All' }, { name: 'Voice' }, { name: 'Chat' }, { name: 'Email' }]
    const tableColumns: ColumnProps<string, string | ReactNode>[] = [
        { key: 'link', value: 'Link' },
        { key: 'agent', value: 'Agent', sortable: true },
        { key: 'customer', value: 'Customer', sortable: true },
        { key: 'channel', value: 'Channel' },
        { key: 'type', value: 'Type' },
        { key: 'campaign_name', value: 'Campaign Name' },
        { key: 'overall_sentiment', value: 'Overall Sentiment' },
        { key: 'overall_call_rating', value: 'Overall Call Rating' },
        { key: 'ai_confidence_score', value: 'AI Confidence Score' },
        { key: 'happened_on', value: 'Happened on' },
    ]

    const tableData = useMemo(() => {
        setTotalPagecount((state) => data?.total ?? state)
        const iterator = isLoading ? [...Array(10)] : data?.data
        return iterator.map((data: any) => {
            const sentimentLabel = data?.result?.overall_sentiment?.label ?? '-'
            const confidenceScore = Math.ceil(data?.result?.overall_sentiment?.score * 100 ?? 0)
            const labelColorScheme = (label: string) => {
                if (label === 'positive') return 'text-[#008344]'
                if (label === 'negative') return 'text-red-500'
                if (label === 'neutral') return 'text-gray-600'
                return 'text-gray-600'
            }
            return {
                id: isLoading ? <PlaceHolder /> : data['_id'],
                link: isLoading ? <PlaceHolder /> : `/interaction-center/conversation?ccid=${data['chatConnectionID']}&channel=${data['chatType']}`,
                agent: isLoading ? <PlaceHolder /> : <Agent data={{ avatar: assets.kiranmaiKulakarni, name: data['agentName'], email: data['email'] }} />,
                customer: isLoading ? <PlaceHolder /> : <Customer data={{ avatar: assets.preetham, name: data['customerName'], phone: data['phoneNumber'] }} />,
                channel: isLoading ? <PlaceHolder /> : <Channel channel={data['chatType']} />,
                type: isLoading ? <PlaceHolder /> : <Type type={data['chatType']} />,
                campaign_name: isLoading ? <PlaceHolder /> : <div className="text-[#015EB0]">CampaignX</div>,
                overall_sentiment: isLoading ? <PlaceHolder /> : <Sentiment sentiment={sentimentLabel} />,
                overall_call_rating: isLoading ? <PlaceHolder /> : <span className={cn('font-bold', labelColorScheme(sentimentLabel))}>4.0/5</span>,
                ai_confidence_score: isLoading ? (
                    <PlaceHolder />
                ) : (
                    <span className={cn('font-bold', labelColorScheme(sentimentLabel))}>{confidenceScore}%</span>
                ),
                happened_on: isLoading ? <PlaceHolder /> : <span>{dateTime(data['updated_at'])}</span>,
            }
        })
    }, [data, isLoading])

    return (
        <div {...props} className="space-y-[18px] px-[56px] py-[15px]">
            <PageSectionTitle title="Interactions" />
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-[15px]">
                    <NavigationMenu className="-z-1">
                        <NavigationMenuList className="gap-4 font-jakarta text-sm text-[#6E6893]">
                            {menuItem.map((item, key) => (
                                <NavigationMenuItem
                                    key={key}
                                    className="cursor-pointer border-b-[2px] border-transparent py-[9px] hover:border-b-[#25213B] hover:text-[#25213B]"
                                >
                                    <NavigationMenuLink>{item.name}</NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex space-x-[15px]">
                        <ButtonGroup variant="bordered">
                            {buttonGroup.map((button, key) => (
                                <Button variant="ghost" className="px-6 py-[9px] text-sm" key={key}>
                                    {button.name}
                                </Button>
                            ))}
                        </ButtonGroup>
                        <Button variant="outline" className="space-x-2">
                            <MoreFiltersIcon /> <span>More filters</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="px-0">
                    <DataTable
                        columns={tableColumns}
                        data={tableData}
                        totalPage={totalPagecount}
                        pageChange={(page) => setCurrentPage(page)}
                        headerClass="uppercase text-[#6E6893] font-semibold tracking-[0.6px]"
                        darkHeader
                    />
                </CardContent>
            </Card>
        </div>
    )
}
