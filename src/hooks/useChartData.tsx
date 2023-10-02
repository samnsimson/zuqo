import { EChartsOption } from 'echarts'
import { useMemo } from 'react'
import * as _ from 'lodash'

interface ChartDataBaseProps {
    name: string
    data: ChartDataSet[]
    labelType?: 'counter' | 'line' | 'naked' | 'none'
    labelPosition?: 'inside' | 'outside'
    labelFormatter?: string
    labelColor?: string
}

interface BarChartProps {
    type: 'BAR'
    rounded?: boolean
}

interface DoughnutChartProps {
    type: 'DOUGHNUT'
    showCount?: boolean
    showLabel?: boolean
    radius?: Array<number>
}

interface PieChartProps {
    type: 'PIE'
}

interface Scatter {
    type: 'SCATTER'
}

interface StackedBarProps {
    type: 'STACKED_BAR'
}

interface AreaChartProps {
    type: 'AREA'
    borderColor: string
    areaColor: string
}

interface BarGroupProps {
    type: 'BAR_GROUP'
}

interface LineChartProps {
    type: 'LINE'
}

type ChartDataProps = ChartDataBaseProps &
    (LineChartProps | StackedBarProps | PieChartProps | DoughnutChartProps | BarChartProps | Scatter | AreaChartProps | BarGroupProps)

export interface ChartDataSet {
    name: string | number
    value: number
    color: string
    category?: string
}

const getLableForLineType = (name: string | number, value: number, color: string): any => ({
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

const getDataSet = (
    data: ChartDataSet[],
    labelType: ChartDataProps['labelType'],
    labelPosition: ChartDataProps['labelPosition'],
    labelFormatter: ChartDataProps['labelFormatter'],
    labelColor = '#fff',
    showCount: boolean = false,
    showLabel: boolean = false
) => {
    const nonZeroData = data.filter(({ value }) => value > 0)
    const sum = nonZeroData.reduce((a, b) => a + b.value, 0)
    return nonZeroData.map(({ name, value, color }) => ({
        name,
        value,
        label:
            labelType === 'line'
                ? getLableForLineType(name, value, color)
                : showCount
                ? getLableForCounterType(sum)
                : {
                      show: showLabel,
                      formatter: labelFormatter,
                      position: labelPosition, // You can change the position to 'inside' or 'outside' as needed
                      textStyle: {
                          fontSize: 12,
                          fontWeight: 'normal',
                          fontFamily: 'Plus Jakarta Sans',
                          color: labelColor,
                      },
                  },
        itemStyle: getItemStyle(color),
    }))
}

const buildDataSetForDoughnut = ({
    name,
    data,
    labelType = 'none',
    labelPosition = 'inside',
    labelFormatter,
    labelColor,
    ...props
}: ChartDataProps): EChartsOption['series'] => {
    props = props as DoughnutChartProps
    return {
        name,
        data: getDataSet(data, labelType, labelPosition, labelFormatter, labelColor, props.showCount, props.showLabel),
        type: 'pie',
        radius: ['radius' in props ? `${props['radius']![0]}%` : '60%', 'radius' in props ? `${props['radius']![1]}%` : '90%'],
        center: ['50%', '50%'],
        color: data.map(({ color }) => color),
        avoidLabelOverlap: false,
        roseType: 'radius',
        emphasis: {
            label: {
                show: false,
            },
        },
        label: {
            show: labelType !== 'none',
            position: labelPosition,
        },
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

const buildDataSetForBar = ({ name, data, ...props }: ChartDataProps): EChartsOption['series'] => {
    return {
        name,
        type: 'bar',
        barWidth: 13,
        barGap: 34,
        data: data.map(({ value, color }) => ({ value, itemStyle: { color, borderRadius: (props as BarChartProps).rounded ? 25 : 0 } })),
    }
}

const buildDataSetForStackedBar = ({ data }: ChartDataProps) => {
    return data.reduce((acc: any[], { value, color, category }) => {
        const index = acc.findIndex((obj: ChartDataProps) => obj.name === category)
        if (index === -1) acc.push({ name: category, type: 'bar', stack: 'bar', barWidth: 13, data: [{ value, itemStyle: { color, borderRadius: 0 } }] })
        else acc[index].data.push({ value, itemStyle: { color, borderRadius: 0 } })
        return acc
    }, [])
}

const buildDataSetForScatter = ({ data }: ChartDataProps): EChartsOption['series'] => {
    const transformedData = data.map(({ name, value, color }) => ({ name, value: [Math.random(), Math.random(), value], color }))
    return {
        type: 'scatter',
        data: transformedData?.map((item) => ({
            name: item.name,
            value: item.value.slice(0, 2),
            symbolSize: Math.max(5, item.value[2]),
            itemStyle: {
                color: item.color,
            },
            label: {
                show: true,
                position: 'inside',
                color: '#fff',
                fontWeight: 'bold',
                formatter: (param: any) => param.data.name.toUpperCase(),
            },
        })),
    }
}

const buildDataSetForArea = ({ borderColor, areaColor }: ChartDataProps & AreaChartProps): EChartsOption['series'] => {
    let base = +new Date()
    const oneHour = 60 * 60
    const d = [[base, Math.random() * 100]]
    for (let i = 1; i < 3600; i++) {
        const now = new Date((base += oneHour))
        d.push([+now, +Math.round((Math.random() - 0.5) * 10 + d[i - 1][1])])
    }
    return {
        name: 'Fake Data',
        type: 'line',
        smooth: false,
        symbol: 'none',
        lineStyle: {
            color: borderColor || '#015EB0',
        },
        areaStyle: {
            color: areaColor || '#015eb07e',
        },
        data: d,
    }
}

const buildDataSetForBarGroup = ({ data }: ChartDataProps): EChartsOption['series'] => {
    const barGroup = _.groupBy(data, 'color')
    return Object.keys(barGroup).map((color) => ({ type: 'bar', color }))
}

const buildDataSetForLine = ({ data }: ChartDataProps): EChartsOption['series'] => {
    const groupedData = _.groupBy(data, 'category')
    return Object.entries(groupedData).map(([, value]) => ({ type: 'line', smooth: true, data: value.map((x) => x.value) }))
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
            case 'SCATTER':
                return buildDataSetForScatter(props)
            case 'AREA':
                return buildDataSetForArea(props)
            case 'BAR_GROUP':
                return buildDataSetForBarGroup(props)
            case 'LINE':
                return buildDataSetForLine(props)
            default:
                return []
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dataset = useMemo(() => buildDataSet(props), [props])

    return { dataset }
}
