/* eslint-disable react-refresh/only-export-components */
import { FC, HTMLAttributes, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { cn } from '@/lib/utils'

export enum ChartType {
    DOUGHNUT = 'doughnut',
}

export type PiechartDataSet = {
    name: string
    value: number
    color: string
}

type OptionType = {
    doughnut: PiechartDataSet[]
}

interface ChartProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    type: ChartType
    dataSet: OptionType[ChartProps['type']]
    width: number
    height: number
}

export const Chart: FC<ChartProps> = ({ className, type, name, dataSet, width, height, ...props }) => {
    const chartContainerRef = useRef(null)

    const formChatoptions = (type: ChartType, name: string, data: OptionType[ChartProps['type']]) => {
        if (type === ChartType.DOUGHNUT) {
            return {
                series: [
                    {
                        name,
                        data,
                        type: 'pie',
                        radius: ['60%', '90%'],
                        color: data.map((e) => e.color),
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                        },
                        emphasis: {
                            label: {
                                show: false,
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                ],
            } as echarts.EChartsOption
        }
    }

    useEffect(() => {
        if (!dataSet || !chartContainerRef.current) return
        const chartDOM = chartContainerRef.current
        const chartElement = echarts.init(chartDOM, null, { width, height })
        const chartOptions = formChatoptions(type, name, dataSet)
        chartOptions && chartElement.setOption(chartOptions)
    }, [chartContainerRef, dataSet, width, height, type, name])

    return (
        <div className={cn('', className)} {...props}>
            <div ref={chartContainerRef} className="block" />
        </div>
    )
}
