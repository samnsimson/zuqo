import { FaceSmileIcon } from '@/assets/svg/icons'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUp } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'

interface InteractionsStatProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const InteractionsStat: FC<InteractionsStatProps> = ({ ...props }) => {
    return (
        <Card className="h-full" {...props}>
            <CardContent className="flex items-start justify-between py-[18px]">
                <div>
                    <div className="text-base font-semibold leading-normal text-neutral-700">NPS</div>
                    <div className="flex items-center">
                        <div className="text-[32px] font-semibold leading-[48px] text-emerald-700">9</div>
                        <div className="text-base font-medium leading-normal text-neutral-700">/10</div>
                    </div>
                    <FaceSmileIcon />
                </div>
                <div>
                    <div className="text-base font-semibold leading-normal text-neutral-700">CSAT</div>
                    <div className="flex items-center space-x-[5px]">
                        <div className="text-[32px] font-semibold leading-[48px] text-emerald-700">95%</div>
                        <div className="text-base font-medium leading-normal text-neutral-700">Satisfied</div>
                    </div>
                    <div className="flex items-center">
                        <ArrowUp className="text-emerald-700" />
                        <div>
                            <span className="text-base font-bold leading-normal text-emerald-700">3.4%</span>
                            <span className="text-base font-medium leading-normal text-neutral-700"> vs last 30 days</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-base font-semibold leading-normal text-neutral-700">FCR</div>
                    <div className="text-[32px] font-semibold leading-[48px] text-emerald-700">95%</div>
                </div>
            </CardContent>
        </Card>
    )
}
