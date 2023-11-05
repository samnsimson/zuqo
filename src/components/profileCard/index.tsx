/* eslint-disable react-refresh/only-export-components */
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback } from '../../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

export enum SatisfactionLevel {
    SATISFIED = 'Satisfied',
}

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
    avatar?: string
    name: string
    phone: string
    activeDuration: string
    lastInteractionOn: string
    satisfactionLevel: SatisfactionLevel
}

export const ProfileCard: FC<ProfileCardProps> = ({ className, avatar, name, phone, activeDuration, lastInteractionOn, satisfactionLevel, ...props }) => {
    return (
        <div className={cn('flex items-center justify-start space-x-8 px-4', className)} {...props}>
            <Avatar>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-[5px]">
                <p className="font-inter text-sm font-[500] text-[#25213B]">{name}</p>
                <p className="text-sm font-normal tracking-[0.7px] text-[#5E5F62]">{phone}</p>
            </div>
            <div className="flex flex-col space-y-[5px]">
                <p className="font-inter text-sm font-[500] uppercase text-[#6E6893]">Active Since</p>
                <p className="text-sm font-semibold text-[#3C3E42] ">{activeDuration}</p>
            </div>
            <div className="flex flex-col space-y-[5px]">
                <p className="font-inter text-sm font-[500] uppercase text-[#6E6893]">LAST INTERACTION ON</p>
                <p className="text-sm font-semibold text-[#5E5F62] ">{lastInteractionOn}</p>
            </div>
            <div className="flex flex-col space-y-[5px]">
                <p className="font-inter text-sm font-[500] uppercase text-[#6E6893]">Customer Satisfaction</p>
                <p className="text-sm font-semibold text-[#008344] ">{satisfactionLevel}</p>
            </div>
        </div>
    )
}
