import { ConversationData, IConversation } from '@/types/types'
import { useEffect, useState } from 'react'

export const useConversationData = (data: ConversationData) => {
    const [conversations, setConversations] = useState<IConversation[]>([])

    const generateConversationData = (data: ConversationData) => {
        if (!data['result'] || !data.result['conversation']) return
        const { conversation } = data.result
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
        generateConversationData(data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return conversations
}
