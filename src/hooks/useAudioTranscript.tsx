import { IConversation, ConversationData } from '@/types/types'
import { useEffect, useState } from 'react'

export const UseAudioTranscript = (data: ConversationData) => {
    const [sprite, setSprite] = useState<Array<number[]>>([])
    const [audioSource, setAudioSource] = useState<string>('')
    const [conversations, setConversations] = useState<IConversation[]>([])

    const generateSprite = ({ result: { conversation } }: ConversationData) => {
        conversation.map(({ message }) => message.map(({ start, end }) => setSprite((state) => [...state, [start / 1000, end / 1000]])))
    }

    const generateConversationData = ({ result: { conversation } }: ConversationData) => {
        const convoArr: IConversation[] = []
        conversation.map(({ id, from, avatar, time, message }) => {
            if (conversations.findIndex((convo) => convo.id === id) === -1) {
                convoArr.push({
                    id: id,
                    sender: from,
                    avatar: avatar,
                    timestamp: time,
                    message: message.map(({ id, start, end, text }) => ({ id, start, end, text })),
                })
            }
        })
        setConversations(convoArr)
    }

    useEffect(() => {
        if (!data) return
        generateSprite(data)
        setAudioSource(data.filename)
        generateConversationData(data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return { sprite, audioSource, conversations }
}
