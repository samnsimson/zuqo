import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { assets } from '@/config/assets'

interface ConversationSectionProps extends HTMLAttributes<HTMLUListElement> {}

interface ConversationContainerProps extends HTMLAttributes<HTMLLIElement> {
    avatar: string
}

interface ConversationBodyProps extends HTMLAttributes<HTMLDivElement> {
    sender: string
    timestamp: string
}

interface ConversationContentProps extends HTMLAttributes<HTMLDivElement> {}

interface ConversationMessageProps extends HTMLAttributes<HTMLParagraphElement> {
    text: string
}

export const ConversationSection: FC<ConversationSectionProps> = ({ className, children, ...props }) => {
    return (
        <ul className={cn('relative my-2.5  grid w-full grid-cols-1 items-center gap-y-6 overflow-y-scroll px-4', className)} {...props}>
            {children}
        </ul>
    )
}

export const ConversationContainer: FC<ConversationContainerProps> = ({ className, children, avatar, ...props }) => {
    return (
        <li className={cn('grid w-full grid-cols-12 items-start gap-x-[11px]', className)} {...props}>
            <div className="col-span-1">
                <Avatar>
                    <AvatarImage src={avatar} />
                </Avatar>
            </div>
            {children}
        </li>
    )
}

export const ConversationBody: FC<ConversationBodyProps> = ({ className, children, sender, timestamp, ...props }) => {
    return (
        <div className={cn('prose col-span-11 flex flex-col', className)} {...props}>
            <div className={cn('flex items-center space-x-4', className)} {...props}>
                <p className="my-0 font-inter text-sm font-[500] text-[#5E5F62]">{sender}</p>
                <p className="my-0 font-inter text-sm text-[#5E5F62]">{timestamp}</p>
            </div>
            {children}
        </div>
    )
}

export const ConversationContent: FC<ConversationContentProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn('grid w-full grid-cols-12 items-center', className)} {...props}>
            <div className="col-span-11">{children}</div>
            <div className="col-span-1 px-2.5">
                <img src={assets.faceSmileRegular} alt="icon" width={13} height={13} className="my-0" />
            </div>
        </div>
    )
}

export const ConversationMessage: FC<ConversationMessageProps> = ({ className, text, ...props }) => {
    const highlightKeywords = (text: string): string => {
        const keywords = ['thrilled', 'positive', 'impact', 'rewarding', 'friendly', 'fantastic']
        const regex = new RegExp(`(${keywords.join('|')})`, 'gi')
        return text.replace(regex, "<span class='text-color-swatch-blue-foreground font-semibold'>$1</span>")
    }
    return (
        <p
            className={cn('my-0 cursor-pointer py-2.5 font-inter text-sm font-[500] text-[#3C3E42]', className)}
            dangerouslySetInnerHTML={{ __html: highlightKeywords(text) }}
            {...props}
        />
    )
}
