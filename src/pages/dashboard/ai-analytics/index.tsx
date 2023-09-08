import { SidebarLayout } from '@/layouts/sidebarLayout'
import { FC, HTMLAttributes } from 'react'
import { AiAnalyticsSection } from './aiAnalytics'
import { SentimentAnalysis } from './sentimentAnalysis'
import { IntentAnalysis } from './intentAnalysis'

interface AiAnalyticsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const AiAnalytics: FC<AiAnalyticsProps> = ({ ...props }) => {
    return (
        <SidebarLayout>
            <div {...props} className="my-[15px] space-y-10 px-[60px]">
                <AiAnalyticsSection />
                <SentimentAnalysis />
                <IntentAnalysis />
            </div>
        </SidebarLayout>
    )
}
