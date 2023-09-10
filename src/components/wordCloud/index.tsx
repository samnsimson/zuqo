import { useChartData } from '@/hooks/useChartData'
import { FC, HTMLAttributes } from 'react'
import { Chart, ChartType } from '../chart'

interface WordCloudData {
    name: string
    value: number
    color: string
}

interface WordCloudProps extends HTMLAttributes<HTMLDivElement> {
    data: WordCloudData[]
    width?: number
    height: number
    space: number
    scale: number
    concentration: number
}

export const WordCloud: FC<WordCloudProps> = ({ data, height, ...props }) => {
    const { dataset } = useChartData({ type: 'SCATTER', data, name: 'Wordcloud' })

    return (
        <div {...props}>
            <Chart dataSet={dataset} height={height} type={ChartType.SCATTER} />
        </div>
    )
}
