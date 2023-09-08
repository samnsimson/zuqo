import { EChartsOption } from 'echarts'
import { useMemo } from 'react'

interface ChartDataBaseProps {
    name: string
    labelType?: 'counter' | 'line' | 'none'
}

interface BarChartProps {
    type: 'BAR'
    data: ChartDataSet[]
}

interface DoughnutChartProps {
    type: 'DOUGHNUT'
    data: ChartDataSet[]
}

interface PieChartProps {
    type: 'PIE'
    data: ChartDataSet[]
}

interface WordBubbleProps {
    type: 'WORDBUBBLE'
    data: ChartDataSet[]
}

interface StackedBarProps {
    type: 'STACKED_BAR'
    data: ChartDataSetStackedBar[]
}

type ChartDataProps = ChartDataBaseProps & (StackedBarProps | PieChartProps | DoughnutChartProps | BarChartProps | WordBubbleProps)

export interface ChartDataSet {
    name: string
    value: number
    color: string
}
export interface ChartDataSetStackedBar {
    name: string
    value: number
    color: string
    category: string
}

const getLableForLineType = (name: string, value: number, color: string): any => ({
    show: true,
    formatter: (params: any) => [`{title|${name}}`, `{subTitle|${value}}\t\t{percent|${Math.ceil(params.percent)}%}`].join('\n'),
    rich: {
        title: { color, fontSize: 14, fontFamily: 'Plus Jakarta Sans', fontWeight: 600, lineHeight: 24 },
        subTitle: { color: '#0F0049', fontFamily: 'Inter', fontSize: 12, fontWeight: 800 },
        percent: { color: '#63616C', fontFamily: 'Plus Jakarta Sans', fontSize: 12, fontWeight: 600 },
    },
})

const getLableForCounterType = (sum: number): any => ({
    show: true,
    color: '#4E545F',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 300,
    position: 'center',
    formatter: () => sum,
})

const getItemStyle = (color: string) => ({
    borderColor: color,
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 2,
    gap: 10,
})

const buildDataSetForPie = (props: ChartDataProps) => {
    return buildDataSetForDoughnut(props)
}

const getDataSet = (data: ChartDataSet[], labelType: ChartDataProps['labelType']) => {
    const nonZeroData = data.filter(({ value }) => value > 0)
    const sum = nonZeroData.reduce((a, b) => a + b.value, 0)
    return nonZeroData.map(({ name, value, color }) => ({
        name,
        value,
        label: labelType === 'line' ? getLableForLineType(name, value, color) : getLableForCounterType(sum),
        itemStyle: getItemStyle(color),
    }))
}

const buildDataSetForDoughnut = ({ data, name, labelType }: ChartDataProps): EChartsOption['series'] => {
    return {
        name,
        data: getDataSet(data, labelType),
        type: 'pie',
        radius: ['60%', '90%'],
        center: ['50%', '50%'],
        color: data.map(({ color }) => color),
        avoidLabelOverlap: false,
        roseType: 'radius',
        labelLine: {
            show: labelType === 'line',
            smooth: true,
            lineStyle: {
                color: '#4E545F',
                width: 1,
            },
        },
    }
}

const buildDataSetForBar = ({ data, name }: ChartDataProps): EChartsOption['series'] => {
    return {
        name,
        type: 'bar',
        barWidth: 13,
        barGap: 34,
        data: data.map(({ value, color }) => ({ value, itemStyle: { color, borderRadius: 25 } })),
    }
}

const buildDataSetForStackedBar = ({ data }: ChartDataProps) => {
    const d = data as ChartDataSetStackedBar[]
    return d.reduce((acc: any[], { value, color, category }) => {
        const index = acc.findIndex((obj: ChartDataSetStackedBar) => obj.name === category)
        if (index === -1) acc.push({ name: category, type: 'bar', stack: 'bar', barWidth: 13, data: [{ value, itemStyle: { color, borderRadius: 0 } }] })
        else acc[index].data.push({ value, itemStyle: { color, borderRadius: 0 } })
        return acc
    }, [])
}

export const useChartData = (props: ChartDataProps): { dataset: EChartsOption['series'] } => {
    const buildDataSet = (props: ChartDataProps) => {
        switch (props.type) {
            case 'BAR':
                return buildDataSetForBar(props)
            case 'PIE':
                return buildDataSetForPie(props)
            case 'DOUGHNUT':
                return buildDataSetForDoughnut(props)
            case 'STACKED_BAR':
                return buildDataSetForStackedBar(props)
            default:
                return []
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dataset = useMemo(() => buildDataSet(props), [props])

    return { dataset }
}