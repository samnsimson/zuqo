import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { ConversationSectionHeader } from '../conversationSectionHeader'
import { assets } from '@/config/assets'
import { ConversationBody, ConversationContainer, ConversationContent, ConversationMessage, ConversationSection } from '../conversation'
import { useConversationData } from '@/hooks/useConversationData'
import { conversationData } from '@/mock-data/chat-conversations'

interface ChatConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const ChatConversations: FC<ChatConversationsProps> = ({ className, ...props }) => {
    const conversations = useConversationData(conversationData)
    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Web Chat Conversation" />
            <ConversationSection>
                {conversations.map((chat) => (
                    <ConversationContainer key={chat.id} avatar={chat.avatar}>
                        <ConversationBody sender={chat.sender} timestamp={chat.timestamp}>
                            <ConversationContent>
                                {chat.message.map(({ id, text }) => (
                                    <ConversationMessage text={text} key={id} />
                                ))}
                            </ConversationContent>
                        </ConversationBody>
                    </ConversationContainer>
                ))}
            </ConversationSection>
        </div>
    )
}
