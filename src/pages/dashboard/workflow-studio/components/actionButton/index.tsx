import { FC, HTMLAttributes, ReactNode } from 'react'

interface ActionButtonProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode
    label: string
}

export const ActionButton: FC<ActionButtonProps> = ({ label, icon, ...props }) => {
    return (
        <div {...props} className="flex cursor-pointer flex-col items-center justify-center space-y-4">
            <div>{icon}</div>
            <div className="text-center text-xs font-medium uppercase text-gray-900">{label}</div>
        </div>
    )
}
