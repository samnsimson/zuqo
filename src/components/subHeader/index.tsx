import { FC } from 'react'
import { IconInput } from '../ui/iconInput'
import { assets } from '@/config/assets'

interface SubHeaderProps {
    [x: string]: any
}

export const SubHeader: FC<SubHeaderProps> = () => {
    return (
        <div className="grid w-full items-center justify-center bg-[#00539f]/5 py-4">
            <IconInput leftIcon={assets.searchboxIcon1} rightIcon={assets.searchboxIcon2} placeholder="Ask anything" />
        </div>
    )
}
