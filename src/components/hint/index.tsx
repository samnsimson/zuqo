import { FC, ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/tooltip'

interface HintProps {
    title: string | ReactNode
    hint: string
}

export const Hint: FC<HintProps> = ({ title, hint }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{title}</TooltipTrigger>
                <TooltipContent>
                    <p>{hint}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
