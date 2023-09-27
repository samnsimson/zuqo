import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { ConversationSectionHeader } from '../conversationSectionHeader'
import { EmailAttachments, EmailBody, EmailContainer, EmailSubject } from '../emailView'

interface EmailConversationsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const EmailConversations: FC<EmailConversationsProps> = ({ className, ...props }) => {
    const message = `<p>Dear Customer Support Team,</p>
    <p>I am writing to express my deep dissatisfaction and frustration regarding the recent delivery of the product I purchased from your company. I placed the order three weeks ago, and despite the promised delivery time of 5-7 business days, I have yet to receive the package.</p>
    <p>I have made multiple attempts to reach out to your customer service helpline, but each time I have been met with long wait times and unhelpful responses. This level of service is completely unacceptable and has only exacerbated my <span style="color:#C61764">disappointment.</span></p>
    <p>Furthermore, the lack of communication and transparency throughout this process has been highly frustrating. I was never informed about any delays or provided with an updated delivery timeline. It seems like my concerns have been completely <span style="color:#C61764">disregarded.<span></p>
    <p>As a loyal customer of your brand for several years, I had expected a much higher standard of service. However, the handling of this situation has severely tarnished my perception of your company. I am now questioning whether I made the right choice in selecting your products.</p>
    <p>I urgently request a resolution to this matter. I expect immediate action to be taken to locate my package and ensure its prompt delivery. Additionally, I believe it is necessary for your organization to review its customer service procedures and address the systemic issues that have led to this negative experience.</p>`
    return (
        <div className={cn('relative', className)} {...props}>
            <img src={assets.rectangleBorder1} alt="border" className="w-full" />
            <ConversationSectionHeader label="Email Conversation" />
            <EmailContainer>
                <EmailSubject subject="Urgent: Unresolved Issue with Product Delivery" />
                <EmailBody message={message} />
                <EmailAttachments source={[assets.attachmentOne, assets.attachmentTwo]} />
            </EmailContainer>
        </div>
    )
}
