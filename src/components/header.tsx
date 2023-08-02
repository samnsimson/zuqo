import { HeaderVariants, headerVariants } from '@/lib/ui/variants/header'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const Header: FC<HeaderProps & HeaderVariants> = ({ variant, children, className }) => {
    return <div className={twMerge(headerVariants({ variant, className }))}>{children}</div>
}
