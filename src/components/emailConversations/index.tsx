import { FC, HTMLAttributes } from 'react'

interface EmailConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const EmailConversations: FC<EmailConversationsProps> = ({ ...props }) => {
    return <div {...props}>EmailConversations</div>
}
