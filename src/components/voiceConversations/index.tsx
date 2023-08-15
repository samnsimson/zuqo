import { AudioPlayer } from '@/components/audioPlayer'
import { TabContentSectionHeader } from '@/components/tabContentSectionHeader'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { assets } from '@/config/assets'
import { useAudioTranscript } from '@/hooks/useAudioTranscript'
import { cn } from '@/lib/utils'
import { conversationData } from '@/mock-data/chat-conversations'
import { FC, HTMLAttributes, useState } from 'react'

interface VoiceConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const SectionHeader: FC = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <TabContentSectionHeader label="Voice Conversation" icon={assets.callIcon} />
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" className="data-[state=checked]:bg-color-swatch-blue" />
                <Label htmlFor="airplane-mode" className="font-jakarta text-sm text-[#5E5F62]">
                    Hide redact transcript
                </Label>
            </div>
        </div>
    )
}

export const VoiceConversations: FC<VoiceConversationsProps> = ({ className, ...props }) => {
    const { sprite, audioSource, conversations } = useAudioTranscript(conversationData)
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
            <SectionHeader />
            <ul className="my-2.5 grid  w-full grid-cols-1 items-center gap-y-6 overflow-y-scroll px-4 ">
                {conversations.map((chat) => (
                    <li key={chat.id} className="grid w-full grid-cols-12 items-start gap-x-[11px]">
                        <div className="col-span-1">
                            <img src={chat.avatar} alt={chat.sender} />
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
                sprite={sprite}
                seekTo={seekTo}
                onTimeStampChange={(time) => handleTimeChange(time)}
                onComplete={() => setActiveConveration(null)}
            />
        </div>
    )
}
