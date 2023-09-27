import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface EmailContainerProps extends HTMLAttributes<HTMLDivElement> {}

interface EmailSubjectProps extends HTMLAttributes<HTMLDivElement> {
    subject: string
}

interface EmailBodyProps extends HTMLAttributes<HTMLDivElement> {
    message: string
}

interface EmailAttachmentsProps extends HTMLAttributes<HTMLDivElement> {
    source: Array<string>
}

export const EmailContainer: FC<EmailContainerProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn('space-y-6 p-[22px]', className)} {...props}>
            {children}
        </div>
    )
}

export const EmailSubject: FC<EmailSubjectProps> = ({ subject, className, ...props }) => {
    return (
        <div className={cn('space-y-4', className)} {...props}>
            <div className="font-inter text-xs font-semibold text-zinc-800">SUBJECT</div>
            <div className="w-[626px] font-inter text-lg font-semibold leading-[31px] text-zinc-800">{subject}</div>
        </div>
    )
}

export const EmailBody: FC<EmailBodyProps> = ({ message, className, ...props }) => {
    return (
        <div className={cn('space-y-4', className)} {...props}>
            <div className="font-inter text-xs font-semibold text-zinc-800">BODY</div>
            <div dangerouslySetInnerHTML={{ __html: message }} className="space-y-4 bg-white p-8 font-inter text-base font-normal leading-8 text-[#333]" />
        </div>
    )
}

export const EmailAttachments: FC<EmailAttachmentsProps> = ({ className, source, ...props }) => {
    return (
        <div className={cn('space-y-4', className)} {...props}>
            <div className="font-inter text-xs font-semibold text-zinc-800">ATTACHMENTS</div>
            <div className="flex items-center justify-start gap-4">
                {source.map((src) => (
                    <div className="h-[130px] w-[130px]">
                        <img src={src} alt={src} className="block h-auto w-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}
