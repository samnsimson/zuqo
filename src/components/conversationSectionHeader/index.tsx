import { assets } from '@/config/assets'
import { TabContentSectionHeader } from '../tabContentSectionHeader'
import { Switch } from '../../ui/switch'
import { Label } from '../../ui/label'
import { FC } from 'react'
import { LanguagesIcon } from 'lucide-react'

export const ConversationSectionHeader: FC<{ label: string; language: string | null }> = ({ label, language }) => {
    return (
        <div className="flex items-center justify-between p-4">
            <TabContentSectionHeader label={label} icon={assets.callIcon} />
            <div className="flex items-center justify-end space-x-4">
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" className="data-[state=checked]:bg-color-swatch-blue" />
                    <Label htmlFor="airplane-mode" className="font-jakarta text-sm text-[#5E5F62]">
                        Hide redact transcript
                    </Label>
                </div>
                {language && (
                    <div className="flex items-center space-x-2 text-gray-600">
                        <LanguagesIcon size={16} /> <p className="text-sm font-semibold">{language}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
