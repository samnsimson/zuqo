import { FC, HTMLAttributes } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { cn } from '@/lib/utils'

type Avatar = {
    id: string
    avatar: string
}

interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
    src: Avatar[]
}

export const AvatarGroup: FC<AvatarGroupProps> = ({ src, className, ...props }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)} {...props}>
            {src.map((src) => (
                <Avatar key={src.id}>
                    <AvatarImage src={src.avatar} />
                </Avatar>
            ))}
        </div>
    )
}
