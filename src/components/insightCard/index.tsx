import { FC, HTMLAttributes, ReactNode } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { ArrowRightIcon } from '@/assets/svg/icons'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Chart, ChartType, PiechartDataSet } from '../chart'
import { assets } from '@/config/assets'

interface InsightCardProps extends HTMLAttributes<HTMLDivElement> {
    primaryColor: string
    iconBg: string
    title: string
    description: string
    icon: ReactNode
    dataset: PiechartDataSet[]
}

export const InsightCard: FC<InsightCardProps> = ({ className, icon, iconBg, primaryColor, title, description, dataset, ...props }) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-xl shadow-gray-200/50">
            <img src={assets.rectangleBgTwo} className="w-full" />
            <Card {...props} className={cn('border-none px-5 py-4', className)}>
                <CardHeader className="mb-5 p-0">
                    <CardTitle className="flex items-center justify-start space-x-3">
                        <div className={cn('flex h-[34px] w-[34px] items-center justify-center rounded', iconBg)}>{icon}</div>
                        <div>
                            <h3 className={cn('text-xl font-semibold', primaryColor)}>{title}</h3>
                            <h6 className="font-inter text-xs font-normal text-black">{description}</h6>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="mb-5 grid grid-cols-2 p-0">
                    <div>
                        <ul className="flex flex-col">
                            <li className="border-b-[1px] border-black border-opacity-5 py-3 text-xs font-medium uppercase tracking-wide text-gray-600 opacity-50 last:border-none">
                                Worflows
                            </li>
                            {dataset.map((data, key) => (
                                <li key={key} className="flex items-center justify-between border-b-[1px] border-black border-opacity-5 py-3 last:border-none">
                                    <div className="flex items-center space-x-2">
                                        <div className={cn('h-3 w-3')} style={{ backgroundColor: data.color }} />
                                        <div className="font-inter text-base font-normal text-gray-600">{data.name}</div>
                                    </div>
                                    <div className="text-center font-inter text-base font-medium text-gray-600">{data.value.toString().padStart(2, '0')}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <Chart name="Insight" type={ChartType.DOUGHNUT} dataSet={dataset} width={127} height={127} showCount={true} />
                    </div>
                </CardContent>
                <CardFooter className="p-0">
                    <Button variant="secondary" className="space-x-2.5 bg-[#F3F6FF] px-5 py-2.5 font-inter text-sm font-semibold text-sky-600">
                        <span>View Details</span> <ArrowRightIcon />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
