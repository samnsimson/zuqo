import { FC, HTMLAttributes } from 'react'
// import { ModuleTabs } from '../moduleTabs'

interface WorkBoardProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const WorkBoard: FC<WorkBoardProps> = ({ ...props }) => {
    return (
        <div {...props} className="relative h-full w-full bg-slate-100">
            {/* <ModuleTabs /> */}
        </div>
    )
}
