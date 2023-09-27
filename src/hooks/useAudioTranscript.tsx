import { ConversationData } from '@/types/types'
import { useEffect, useState } from 'react'
import { useConversationData } from './useConversationData'

export const useAudioTranscript = (data: ConversationData) => {
    const [audioSource, setAudioSource] = useState<string>('')
    const conversations = useConversationData(data)

    useEffect(() => {
        if (!data) return
        setAudioSource(data.filename)
    }, [data])

    return { audioSource, conversations }
}
