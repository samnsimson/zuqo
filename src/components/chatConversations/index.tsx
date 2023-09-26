import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { ConversationSectionHeader } from '../conversationSectionHeader'
import { assets } from '@/config/assets'

interface ChatConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const ChatConversations: FC<ChatConversationsProps> = ({ className, ...props }) => {
    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Web Chat Conversation" />
        </div>
    )
}
