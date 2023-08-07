import { EmailIcon, InfoIcon } from '@/assets/svg/icons'
import { BoxTitle } from '@/components/boxTitle'
import { ProfileCard, SatisfactionLevel } from '@/components/profileCard'
import { TabContentSectionHeader } from '@/components/tabContentSectionHeader'
import { Badge } from '@/components/ui/badge'
import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface CustomerInsightsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const CustomerInsights: FC<CustomerInsightsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('flex flex-col space-y-4', className)} {...props}>
            <img src={assets.rectangleBorder2} alt="border" className="w-full" />
            <TabContentSectionHeader label="Customer Insights" className="p-4 pt-0" />
            <ProfileCard
                name="Preetam Kulakarni"
                avatar={assets.preetham}
                phone="+91 849***8493"
                activeDuration="4 years"
                lastInteractionOn="12 May 2023, 04:00pm"
                satisfactionLevel={SatisfactionLevel.SATISFIED}
                className="!mb-4"
            />
            <div className="grid w-full grid-cols-12 items-start gap-4 px-4">
                <div className="col-span-5 space-y-2 rounded bg-white px-5 py-2.5 shadow">
                    <BoxTitle title="Customer Sentiment" />
                    <div className="flex items-center space-x-[5px]">
                        <img src={assets.faceSmileRegular} alt="" />
                        <div>
                            <Badge variant="default" className="flex items-center space-x-2 bg-[#F0FFF3] font-inter text-[#008344]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#008344" />
                                </svg>
                                <p>Positive</p>
                            </Badge>
                            <h4 className="px-1 font-inter font-bold text-[#008344]">89</h4>
                        </div>
                    </div>
                    <p className="text-xs">
                        <span className="font-semibold text-color-swatch-blue-foreground">4%</span> above threshold, Previous:{' '}
                        <span className="font-semibold text-color-swatch-blue-foreground">Neutral (60)</span>
                    </p>
                </div>
                <div className="col-span-7 h-full rounded bg-white shadow">
                    <div className="grid w-full grid-cols-3 items-start gap-1 p-4">
                        <div className="gri-cols-1 grid h-full content-between gap-4">
                            <BoxTitle title="Preferred channel choice" />
                            <div className="flex items-center space-x-2">
                                <EmailIcon /> <p className="text-sm font-semibold text-[#3C3E42]">Email</p>
                            </div>
                        </div>
                        <div className="gri-cols-1 grid h-full content-between gap-4">
                            <BoxTitle title="# of times connected" />
                            <div className="flex items-center space-x-2">
                                <p className="text-sm font-semibold text-[#3C3E42]">12 Times</p>
                            </div>
                        </div>
                        <div className="gri-cols-1 grid h-full content-between gap-4">
                            <BoxTitle
                                title={
                                    <>
                                        COMMON <br />
                                        REASON
                                    </>
                                }
                            />
                            <div className="flex items-center space-x-2">
                                <p className="text-sm font-semibold text-[#C61764]">Pricing</p> <InfoIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="grid w-full grid-cols-12 gap-4 rounded bg-white shadow">
                    <div className="col-span-5 grid grid-cols-1 gap-4 p-4">
                        <BoxTitle title="CUSTOMER MENTIONS" />
                        <img src={assets.cusomerMentions} alt="customer mention" className="justify-self-center" />
                    </div>
                    <div className="col-span-7 grid grid-cols-1 gap-4 p-4">
                        <div className="grid w-full grid-cols-2 content-between">
                            <BoxTitle title="CALL SUMMARY" />
                            <p className="font-inter text-xs font-bold text-[#5E5F62]">
                                CONFIDENCE SCORE: <span className="text-[#008344]">98.6%</span>
                            </p>
                        </div>
                        <p className="font-inter text-sm font-[500] leading-7 text-[#4E555F]">
                            During the call, the customer expressed their happiness and satisfaction with the product, highlighting its features that exceeded
                            their expectations. I addressed their inquiries and resolved a minor issue to their satisfaction. The customer appreciated the
                            prompt assistance and expressed a positive sentiment throughout the call.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
