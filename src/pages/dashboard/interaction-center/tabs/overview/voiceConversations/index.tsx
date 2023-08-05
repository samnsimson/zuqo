import { AudioPlayer } from '@/components/audioPlayer'
import { TabContentSectionHeader } from '@/components/tabContentSectionHeader'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { chatConversations } from '@/mock-data/chat-conversations'
import { FC, HTMLAttributes } from 'react'

interface VoiceConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const SectionHeader: FC = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <TabContentSectionHeader label="Voice Conversation" icon="call-icon.svg" />
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
    const highlightKeywords = (text: string): string => {
        const regex = /(thrilled|positive|impact|rewarding|friendly|fantastic)/gi
        return text.replace(regex, "<span class='text-color-swatch-blue-foreground font-semibold'>$1</span>")
    }
    return (
        <div className={cn('relative', className)} {...props}>
            <img src="rectangle-border-1.png" alt="border" className="w-full" />
            <SectionHeader />
            <ul className="my-2.5 grid  w-full grid-cols-1 items-center gap-y-6 overflow-y-scroll px-4 pb-[100px]">
                {chatConversations.map((chat, key) => (
                    <li key={key} className="grid w-full grid-cols-12 items-start gap-x-[11px]">
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
                                    {chat.message.map((msg, key) => (
                                        <p
                                            className="my-0 py-2.5 font-inter text-sm font-[500] text-[#3C3E42]"
                                            key={key}
                                            dangerouslySetInnerHTML={{ __html: highlightKeywords(msg.text) }}
                                        />
                                    ))}
                                </div>
                                <div className="col-span-1 px-2.5">
                                    <img src="face-smile-regular.svg" alt="icon" width={13} height={13} className="my-0" />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <AudioPlayer url="sample-audio.wav" />
        </div>
    )
}
