import { FC, HTMLAttributes } from 'react'

interface ChatConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const ChatConversations: FC<ChatConversationsProps> = ({ ...props }) => {
    return <div {...props}>ChatConversations</div>
}
