import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { ConversationSectionHeader } from '../conversationSectionHeader'

interface EmailConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const EmailConversations: FC<EmailConversationsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Email Conversation" />
        </div>
    )
}
