import { AudioPlayer } from '@/components/audioPlayer'
import { assets } from '@/config/assets'
import { useAudioTranscript } from '@/hooks/useAudioTranscript'
import { cn } from '@/lib/utils'
import { FC, Fragment, HTMLAttributes, useState } from 'react'
import { ConversationSectionHeader } from '../conversationSectionHeader'
import { ConversationBody, ConversationContainer, ConversationContent, ConversationMessage, ConversationSection } from '../conversation'
import { NoData } from '../errorUI'

interface VoiceConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const VoiceConversations: FC<VoiceConversationsProps> = ({ className, data, ...props }) => {
    const { audioSource, conversations } = useAudioTranscript(data)
    const [seekTo, setSeekTo] = useState(0)
    const [activeConveration, setActiveConveration] = useState<string | null>(null)

    const handleTimeChange = (time: number) => {
        const targetMessage = conversations.flatMap((convo) => convo.message).find(({ start, end }) => start <= time && end >= time)
        targetMessage && setActiveConveration(targetMessage.id)
    }

    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Voice Conversation" language={data['language'] || null} />
            <Fragment>
                {conversations.length !== 0 ? (
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
                ) : (
                    <NoData translation={data?.result?.translation} />
                )}
                <AudioPlayer
                    url={audioSource}
                    seekTo={seekTo}
                    onTimeStampChange={(time) => handleTimeChange(time)}
                    onComplete={() => setActiveConveration(null)}
                    className="sticky bottom-0"
                />
            </Fragment>
        </div>
    )
}
