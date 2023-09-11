import { FC, HTMLAttributes } from 'react'

interface PageSectionTitleProps extends HTMLAttributes<HTMLDivElement> {
    title: string
}

export const PageSectionTitle: FC<PageSectionTitleProps> = ({ title, ...props }) => {
    return (
        <div className="text-base font-bold text-[#00539F]" {...props}>
            {title}
        </div>
    )
}
