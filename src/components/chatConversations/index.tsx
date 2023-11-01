import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { ConversationSectionHeader } from '../conversationSectionHeader'
import { assets } from '@/config/assets'
import { ConversationBody, ConversationContainer, ConversationContent, ConversationMessage, ConversationSection } from '../conversation'
import { useConversationData } from '@/hooks/useConversationData'
import { NoData } from '../errorUI'

interface ChatConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const ChatConversations: FC<ChatConversationsProps> = ({ className, data = {}, ...props }) => {
    const conversations = useConversationData(data)
    console.log('🚀 ~ file: index.tsx:15 ~ conversations:', conversations)
    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Web Chat Conversation" language={data['language'] || null} />
            {conversations.length !== 0 ? (
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
            ) : (
                <NoData translation={data?.result?.translation} />
            )}
        </div>
    )
}
