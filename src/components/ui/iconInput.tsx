import { HTMLAttributes, forwardRef } from 'react'
import { Input } from './input'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const iconInputVariants = cva(
    'border-none bg-transparent focus:border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0',
    {
        variants: {
            variant: {
                default: '',
            },
            size: {
                default: '',
                small: 'p-0',
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
    }
)

interface IconInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof iconInputVariants> {
    leftIcon?: string
    rightIcon?: string
}

export const IconInput = forwardRef<HTMLInputElement, IconInputProps>(({ className, variant, size, leftIcon = null, rightIcon = null, ...props }, ref) => {
    return (
        <div className="flex max-h-16 w-[785px] items-center gap-2 rounded-lg bg-white p-2.5 shadow">
            {leftIcon && <img src={leftIcon} alt="searchbox icon" />}
            <Input {...props} ref={ref} className={cn(iconInputVariants({ variant, size, className }))} />
            {rightIcon && <img src={rightIcon} alt="searchbox icon" />}
        </div>
    )
})
