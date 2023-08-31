import { Chart, ChartType } from '@/components/chart'
import { ChartContainer } from '@/components/chartContainer'
import { useChartData } from '@/hooks/useChartData'
import { barChartDataWordUsage } from '@/mock-data/chart-data'
import { FC, HTMLAttributes } from 'react'

interface SentimentAnalysisProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const SentimentAnalysis: FC<SentimentAnalysisProps> = ({ ...props }) => {
    const { dataset } = useChartData({ type: 'BAR', data: barChartDataWordUsage, name: 'Sentiment', labelType: 'none' })
    return (
        <div {...props} className="space-y-5">
            <div className="text-base font-bold uppercase leading-tight tracking-wider text-sky-700">Sentiment Analysis</div>
            <div className="grid grid-cols-3 gap-[18px]">
                <ChartContainer title="Customer Words Usage Frequency">
                    {dataset && (
                        <Chart
                            dataSet={dataset}
                            width={500}
                            height={400}
                            name="Sentiment"
                            type={ChartType.BAR}
                            keys={barChartDataWordUsage.map((d) => d.name)}
                        />
                    )}
                </ChartContainer>
            </div>
        </div>
    )
}
