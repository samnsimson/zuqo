import { ChartContainer } from '@/components/chartContainer'
import { FC, HTMLAttributes } from 'react'
import { ConversationIntentOutcome } from './components/conversationIntentOutcome'
import { ConversationIntent } from './components/conversationIntent'

interface IntentAnalysisProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const IntentAnalysis: FC<IntentAnalysisProps> = ({ ...props }) => {
    return (
        <div {...props} className="space-y-5">
            <div className="text-base font-bold uppercase leading-tight tracking-wider text-sky-700">Intent Analysis</div>
            <div className="grid auto-rows-fr grid-cols-12 gap-[18px]">
                <div className="col-span-6">
                    <ChartContainer title="Distribution of Conversation Intents" className="h-full">
                        <ConversationIntent />
                    </ChartContainer>
                </div>
                <div className="col-span-6">
                    <ChartContainer title="Distribution of Conversation Intent Outcomes">
                        <ConversationIntentOutcome />
                    </ChartContainer>
                </div>
            </div>
        </div>
    )
}
