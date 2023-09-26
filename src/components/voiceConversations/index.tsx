import { AudioPlayer } from '@/components/audioPlayer'
import { assets } from '@/config/assets'
import { useAudioTranscript } from '@/hooks/useAudioTranscript'
import { cn } from '@/lib/utils'
import { conversationData } from '@/mock-data/chat-conversations'
import { FC, HTMLAttributes, useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { ConversationSectionHeader } from '../conversationSectionHeader'

interface VoiceConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const VoiceConversations: FC<VoiceConversationsProps> = ({ className, ...props }) => {
    const { audioSource, conversations } = useAudioTranscript(conversationData)
    const [seekTo, setSeekTo] = useState(0)
    const [activeConveration, setActiveConveration] = useState<string | null>(null)

    const highlightKeywords = (text: string): string => {
        const keywords = ['thrilled', 'positive', 'impact', 'rewarding', 'friendly', 'fantastic']
        const regex = new RegExp(`(${keywords.join('|')})`, 'gi')
        return text.replace(regex, "<span class='text-color-swatch-blue-foreground font-semibold'>$1</span>")
    }

    const handleTimeChange = (time: number) => {
        const targetMessage = conversations.flatMap((convo) => convo.message).find(({ start, end }) => start <= time && end >= time)
        targetMessage && setActiveConveration(targetMessage.id)
    }

    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Voice Conversation" />
            <ul className="relative my-2.5  grid w-full grid-cols-1 items-center gap-y-6 overflow-y-scroll px-4">
                {conversations.map((chat) => (
                    <li key={chat.id} className="grid w-full grid-cols-12 items-start gap-x-[11px]">
                        <div className="col-span-1">
                            <Avatar>
                                <AvatarImage src={chat.avatar} />
                            </Avatar>
                        </div>
                        <div className="prose col-span-11 flex flex-col ">
                            <div className="flex items-center space-x-4">
                                <p className="my-0 font-inter text-sm font-[500] text-[#5E5F62]">{chat.sender}</p>
                                <p className="my-0 font-inter text-sm text-[#5E5F62]">{chat.timestamp}</p>
                            </div>
                            <div className="grid w-full grid-cols-12 items-center">
                                <div className="col-span-11">
                                    {chat.message.map(({ id, text, start }) => (
                                        <p
                                            className={cn('my-0 cursor-pointer py-2.5 font-inter text-sm font-[500] text-[#3C3E42]', {
                                                'font-bold text-sky-500 underline': activeConveration === id,
                                            })}
                                            key={id}
                                            dangerouslySetInnerHTML={{ __html: highlightKeywords(text) }}
                                            onClick={() => setSeekTo(start)}
                                        />
                                    ))}
                                </div>
                                <div className="col-span-1 px-2.5">
                                    <img src={assets.faceSmileRegular} alt="icon" width={13} height={13} className="my-0" />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
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
