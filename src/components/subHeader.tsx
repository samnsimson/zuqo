import { FC } from 'react'
import { IconInput } from './ui/iconInput'

interface SubHeaderProps {
    [x: string]: any
}

export const SubHeader: FC<SubHeaderProps> = () => {
    return (
        <div className="grid w-full items-center justify-center bg-[#00539f]/5 py-4">
            <IconInput leftIcon="searchbox-icon-1.svg" rightIcon="searchbox-icon-2.svg" placeholder="Ask anything" />
        </div>
    )
}
