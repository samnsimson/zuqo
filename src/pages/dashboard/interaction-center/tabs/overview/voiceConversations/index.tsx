import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface VoiceConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const SectionHeader: FC = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3 ">
                <img src="call-icon.svg" alt="call-icon" />
                <p className="text-sm font-bold uppercase text-color-swatch-blue-foreground">Voice Conversation</p>
            </div>
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
    return (
        <div className={cn('', className)} {...props}>
            <img src="rectangle-border-1.png" alt="border" className="w-full" />
            <SectionHeader />
        </div>
    )
}
