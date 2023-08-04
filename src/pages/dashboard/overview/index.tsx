import { ActionCardGroup } from '@/components/actionCardGroup'
import { DashboardFooter } from '@/components/dashboardFooter'
import { HomeBanner } from '@/components/homeBanner'
import { QuickLinksSummary } from '@/components/quickLinksSummary'
import { RecentActivitySummary } from '@/components/recentActivitySummary'
import { SubHeader } from '@/components/subHeader'
import { WelcomeMessage } from '@/components/welcomeMessage'
import { YourTasksSummary } from '@/components/yourTasksSummary'
import { FC, useState } from 'react'

interface OverviewPageProps {
    [x: string]: any
}

export const OverviewPage: FC<OverviewPageProps> = () => {
    const [showBanner, setShowBanner] = useState(true)
    return (
        <div className="h-full flex-grow bg-[#F9FAFB]">
            <SubHeader />
            <main className="mx-auto w-full py-5 md:max-w-[1100px]">
                <div className="grid w-full items-center justify-center gap-9">
                    <div className="mx-auto grid items-center gap-5 md:w-[777px]">
                        <HomeBanner show={showBanner} onClose={() => setShowBanner(!showBanner)} />
                        <WelcomeMessage />
                    </div>
                    <ActionCardGroup />
                    <div className="grid grid-cols-1 gap-[17px] md:grid-cols-5">
                        <YourTasksSummary className="col-span-2" />
                        <RecentActivitySummary className="col-span-2" />
                        <QuickLinksSummary className="col-span-1" />
                    </div>
                </div>
            </main>
            <DashboardFooter />
        </div>
    )
}
