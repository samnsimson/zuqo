import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface NodeProps extends HTMLAttributes<HTMLDivElement> {
    selected: boolean
    id: string
    label: string
}

export const Node: FC<NodeProps> = ({ id, selected, label, className, children, ...props }) => {
    return (
        <div
            className={cn(
                'min-w-[130px] rounded-lg border-[1px] border-gray-400 bg-white p-3 shadow-sm',
                'z-0 flex flex-col space-y-2 font-semibold',
                { 'border-sky-500 bg-sky-50 text-sky-500': selected },
                className
            )}
            data-node="custom-node"
            data-node-id={id}
            {...props}
        >
            <p className="rounded-lg bg-gradient-to-b from-[#00539F] to-[#BB1865] p-4 text-xs font-semibold uppercase text-white">{label}</p>
            {children}
        </div>
    )
}
