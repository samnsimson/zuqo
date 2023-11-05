import { FC } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/ui/alert-dialog'
import { AlertDialogProps } from '@radix-ui/react-alert-dialog'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const confirmationPopUpVariants = cva('', { variants: { variant: { destructive: 'bg-red-50 border-red-500' } } })
const confirmationPopUpCancelButtonVariants = cva('', {
    variants: { variant: { destructive: 'text-red-500 border-red-500 hover:bg-red-100 hover:text-red-500' } },
})
const confirmationPopUpConfirmButtonVariants = cva('', { variants: { variant: { destructive: 'border-red-500 bg-red-500 hover:bg-red-600' } } })
const confirmationPopUpTitleVariants = cva('', { variants: { variant: { destructive: 'text-red-500' } } })
const confirmationPopUpDescriptionVariants = cva('', { variants: { variant: { destructive: 'text-red-500/60' } } })

interface ConfirmationPropUpProps
    extends AlertDialogProps,
        VariantProps<typeof confirmationPopUpVariants>,
        VariantProps<typeof confirmationPopUpCancelButtonVariants>,
        VariantProps<typeof confirmationPopUpTitleVariants>,
        VariantProps<typeof confirmationPopUpDescriptionVariants>,
        VariantProps<typeof confirmationPopUpConfirmButtonVariants> {
    title: string
    description?: string
    onCancel: () => void
    onConfirm: () => void
}

export const ConfirmationPropUpComponent: FC<ConfirmationPropUpProps> = ({ title, description = null, onCancel, onConfirm, children, variant, ...props }) => {
    return (
        <AlertDialog {...props}>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent className={cn(confirmationPopUpVariants({ variant }))}>
                <AlertDialogHeader>
                    <AlertDialogTitle className={cn(confirmationPopUpTitleVariants({ variant }))}>{title}</AlertDialogTitle>
                    {description && (
                        <AlertDialogDescription className={cn(confirmationPopUpDescriptionVariants({ variant }))}>{description}</AlertDialogDescription>
                    )}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel} className={cn(confirmationPopUpCancelButtonVariants({ variant }))}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm} className={cn(confirmationPopUpConfirmButtonVariants({ variant }))}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
