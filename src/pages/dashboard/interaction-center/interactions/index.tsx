import { ChannelChat, ChannelEmail, ChannelPhone, FaceSadIcon, FaceSmileIcon, MoreActionIcon, MoreFiltersIcon } from '@/assets/svg/icons'
import { ColumnProps, DataTable } from '@/components/dataTable'
import { PageSectionTitle } from '@/components/pageSectionTitle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { interactionsData } from '@/mock-data/interactions-data'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import moment from 'moment'
import { FC, HTMLAttributes, ReactNode, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { v4 as UUID } from 'uuid'
import { ActionButton } from '../../workflow-studio/components/actionButton'

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
    if (channel === 'phone') return <ChannelPhone />
    if (channel === 'email') return <ChannelEmail />
    if (channel === 'chat') return <ChannelChat />
}

const Type: FC<{ type: string }> = ({ type }) => {
    return (
        <div className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-gray-100 px-2.5 py-1">
            <div className="text-sm font-medium text-slate-800">{type}</div>
        </div>
    )
}

const Sentiment: FC<{ sentiment: string }> = ({ sentiment }) => {
    if (sentiment === 'Positive')
        return (
            <div className="flex items-center gap-[5px]">
                <FaceSmileIcon />
                <Badge className="space-x-[5px] bg-[#F0FFF3] text-[#008344] hover:bg-[#F0FFF3]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#008344]" />
                    <span>{sentiment}</span>
                </Badge>
            </div>
        )

    if (sentiment === 'Negative')
        return (
            <div className="flex items-center gap-[5px]">
                <FaceSadIcon />
                <Badge className="space-x-[5px] bg-[#FFE1E1] text-[#E50B0B] hover:bg-[FFE1E1]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#E50B0B]" />
                    <span>{sentiment}</span>
                </Badge>
            </div>
        )
}

const ActionList: FC<{ id: string | number; showLabel: boolean }> = ({ id, showLabel }) => {
    return (
        <div className="flex space-x-[25px]">
            <ActionButton label={showLabel ? 'More' : null} icon={<MoreActionIcon color="#015EB0" />} onClick={() => console.log(id)} />
        </div>
    )
}

export const Interactions: FC<InteractionsProps> = ({ ...props }) => {
    const menuItem = [{ name: 'All' }, { name: 'Inbound' }, { name: 'Outbound' }]
    const buttonGroup = [{ name: 'All' }, { name: 'Voice' }, { name: 'Chat' }, { name: 'Email' }]
    const tableColumns: ColumnProps<string, string | ReactNode>[] = [
        { key: 'agent', value: 'Agent' },
        { key: 'customer', value: 'Customer' },
        { key: 'channel', value: 'Channel' },
        { key: 'type', value: 'Type' },
        { key: 'campaign_name', value: 'Campaign Name' },
        { key: 'overall_sentiment', value: 'Overall Sentiment' },
        { key: 'overall_call_rating', value: 'Overall Call Rating' },
        { key: 'ai_confidence_score', value: 'AI Confidence Score' },
        { key: 'happened_on', value: 'Happened on' },
        { key: 'actions', value: null },
    ]

    const tableData = useMemo(
        () =>
            interactionsData.map((data) => ({
                id: UUID(),
                agent: <Agent data={data.agent} />,
                customer: <Customer data={data.customer} />,
                channel: <Channel channel={data.channel} />,
                type: <Type type={data.type} />,
                campaign_name: (
                    <Link to={data.campaign.link} className="text-[#015EB0]">
                        {data.campaign.name}
                    </Link>
                ),
                overall_sentiment: <Sentiment sentiment={data.overallSentiment} />,
                overall_call_rating: <span className="font-bold text-[#008344]">{data.overallCallRating}</span>,
                ai_confidence_score: <span className="font-bold text-[#008344]">{data.aiConfidenceScore}</span>,
                happened_on: moment(data.timeStamp).format('DD/mm/yyyy hh:mm:ss'),
                actions: <ActionList id={UUID()} showLabel={false} />,
            })),
        []
    )

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
                    <DataTable columns={tableColumns} data={tableData} darkHeader headerClass="uppercase text-[#6E6893] font-semibold tracking-[0.6px]" />
                </CardContent>
            </Card>
        </div>
    )
}
