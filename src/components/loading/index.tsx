import { LoaderIcon } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const Loading: FC<LoadingProps> = ({ ...props }) => {
    return (
        <div className="relative flex h-[762px] items-center justify-center">
            <div {...props} className="flex flex-col items-center justify-center space-y-4 text-sky-600">
                <LoaderIcon className="animate-spin" size={32} /> <span>Loading... Please wait.</span>
            </div>
        </div>
    )
}
