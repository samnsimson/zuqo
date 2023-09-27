import { AudioPlayer } from '@/components/audioPlayer'
import { assets } from '@/config/assets'
import { useAudioTranscript } from '@/hooks/useAudioTranscript'
import { cn } from '@/lib/utils'
import { conversationData } from '@/mock-data/chat-conversations'
import { FC, HTMLAttributes, useState } from 'react'
import { ConversationSectionHeader } from '../conversationSectionHeader'
import { ConversationBody, ConversationContainer, ConversationContent, ConversationMessage, ConversationSection } from '../conversation'

interface VoiceConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const VoiceConversations: FC<VoiceConversationsProps> = ({ className, ...props }) => {
    const { audioSource, conversations } = useAudioTranscript(conversationData)
    const [seekTo, setSeekTo] = useState(0)
    const [activeConveration, setActiveConveration] = useState<string | null>(null)

    const handleTimeChange = (time: number) => {
        const targetMessage = conversations.flatMap((convo) => convo.message).find(({ start, end }) => start <= time && end >= time)
        targetMessage && setActiveConveration(targetMessage.id)
    }

    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Voice Conversation" />
            <ConversationSection>
                {conversations.map((chat) => (
                    <ConversationContainer key={chat.id} avatar={chat.avatar}>
                        <ConversationBody sender={chat.sender} timestamp={chat.timestamp}>
                            <ConversationContent>
                                {chat.message.map(({ id, text, start }) => (
                                    <ConversationMessage
                                        className={cn({ 'font-bold text-sky-500 underline': activeConveration === id })}
                                        text={text}
                                        key={id}
                                        onClick={() => setSeekTo(start)}
                                    />
                                ))}
                            </ConversationContent>
                        </ConversationBody>
                    </ConversationContainer>
                ))}
            </ConversationSection>
            <AudioPlayer
                url={audioSource}
                seekTo={seekTo}
                onTimeStampChange={(time) => handleTimeChange(time)}
                onComplete={() => setActiveConveration(null)}
                className="sticky bottom-0"
            />
        </div>
    )
}
