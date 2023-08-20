import { FC, HTMLAttributes } from 'react'

interface NameAndDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    name: string
    description: string
}

export const NameAndDescription: FC<NameAndDescriptionProps> = ({ name, description, ...props }) => {
    return (
        <div className="flex w-full flex-col space-y-3" {...props}>
            <div className="text-sm font-semibold text-sky-700">{name}</div>
            <div className="w-[261px] text-sm font-normal leading-snug text-gray-900 opacity-70">{description}</div>
        </div>
    )
}
