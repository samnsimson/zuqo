import { ConversationData } from '@/types/types'
import { useEffect, useState } from 'react'
import { useConversationData } from './useConversationData'

const { VITE_AUDIO_FILE_PATH } = import.meta.env

export const useAudioTranscript = (data: ConversationData) => {
    const [audioSource, setAudioSource] = useState<string>('')
    const conversations = useConversationData(data)

    useEffect(() => {
        if (!data) return
        const audioFileName = data?.filename?.split('/').pop()
        if (audioFileName) setAudioSource(`${VITE_AUDIO_FILE_PATH}/${audioFileName}`)
    }, [data])

    return { audioSource, conversations }
}
