import { IconGreenCheck, IconYeallowCheck } from '@/assets/svg/icons'
import { BoxTitle } from '@/components/boxTitle'
import { ProfileCard, SatisfactionLevel } from '@/components/profileCard'
import { StartRattings } from '@/components/rattings'
import { TabContentSectionHeader } from '@/components/tabContentSectionHeader'
import { Badge } from '@/components/ui/badge'
import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { complianceCategories } from '@/mock-data/compliance-categories'
import { ChevronRight } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'

interface AgentInsightsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const AgentInsights: FC<AgentInsightsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('flex flex-col space-y-4', className)} {...props}>
            <img src={assets.reactangleBorder3} alt="border" className="w-full" />
            <TabContentSectionHeader label="Agent Insights" className="p-4 pt-0" />
            <ProfileCard
                name="Kiranmai Kulakarni"
                avatar={assets.kiranmaiKulakarni}
                phone="kiranmai@airtel.in"
                activeDuration="4 years"
                lastInteractionOn="12 May 2023, 04:00pm"
                satisfactionLevel={SatisfactionLevel.SATISFIED}
                className="!mb-4"
            />
            <div className="grid w-full grid-cols-12 items-start gap-4 px-4">
                <div className="col-span-4 h-full space-y-2 rounded bg-white px-5 py-2.5 shadow">
                    <div className="grid h-full grid-cols-1 items-center justify-items-center gap-[5px]">
                        <BoxTitle title="Agent Sentiment" />
                        <div className="flex items-center space-x-[5px]">
                            <img src={assets.faceSmileRegular} alt="" />
                            <div>
                                <Badge variant="default" className="flex items-center space-x-2 bg-[#F0FFF3] font-inter text-[#008344]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#008344" />
                                    </svg>
                                    <p>Positive</p>
                                </Badge>
                                <h4 className="px-1 font-inter font-bold text-[#008344]">78</h4>
                            </div>
                        </div>
                        <p className="text-xs">
                            <span className="font-semibold text-color-swatch-blue-foreground">2%</span> above threshold
                        </p>
                    </div>
                </div>
                <div className="col-span-4 h-full space-y-2 rounded bg-white px-5 py-2.5 shadow">
                    <div className="grid h-full grid-cols-1 items-center justify-items-center">
                        <BoxTitle title="Agent Compliance" />
                        <div className="prose flex items-center space-x-[5px]">
                            <h4 className="text-2xl font-bold text-[#008344]">90%</h4>
                        </div>
                        <p className="text-xs">
                            <span className="font-semibold text-color-swatch-blue-foreground">2%</span> above threshold
                        </p>
                    </div>
                </div>
                <div className="col-span-4 h-full space-y-2 rounded bg-white px-5 py-2.5 shadow">
                    <div className="grid h-full grid-cols-1 items-center justify-items-center">
                        <BoxTitle title="Agent Knowledge" />
                        <StartRattings rating={5} label={null} starStyle="h-[17px] w-[17px]" />
                        <p className="text-xs">
                            <span className="font-semibold text-color-swatch-blue-foreground">5 of 5</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="grid w-full grid-cols-12 gap-4 rounded bg-white shadow">
                    <div className="col-span-5 grid grid-cols-1 gap-4 p-4">
                        <BoxTitle title="CUSTOMER MENTIONS" />
                        <img src={assets.agentMentions} alt="customer mention" className="justify-self-center" />
                    </div>
                    <div className="col-span-7 grid grid-cols-1 gap-4 p-4">
                        <div className="grid w-full grid-cols-2 content-between">
                            <BoxTitle title="COMPLIANCE OVERVIEW" />
                        </div>
                        {complianceCategories.map((cat, key) => (
                            <div className="grid grid-cols-12 gap-[8px] bg-[#F8FAFB] p-[5px]" key={key}>
                                <div className="col-span-11">
                                    <div className="grid grid-cols-1 gap-2">
                                        <p className="font-inter font-[500] text-[#3C3E42]">{cat.title}</p>
                                        <div className="flex justify-evenly space-x-[3px]">
                                            {[...Array(cat.total)].map((_, key) => (
                                                <div
                                                    key={key}
                                                    className={`w-full border-t-4 ${key + 1 > cat.rating ? 'border-t-[#F5AD58]' : 'border-t-[#2D956F]'}`}
                                                >
                                                    {key + 1 > cat.rating ? <IconYeallowCheck /> : <IconGreenCheck />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 items-center justify-items-center">
                                    <ChevronRight />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
