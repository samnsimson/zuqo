import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement, forwardRef, isValidElement, useState } from 'react'
import { Separator } from './separator'

const buttonGroupVariants = cva('my-0 flex rounded-md overflow-hidden', {
    variants: { variant: { bordered: 'border-[1px] border-gray-300' }, orientation: { horizontal: 'flex', vertical: 'flex-col' } },
    defaultVariants: { orientation: 'horizontal' },
})

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonGroupVariants> {
    children: ReactNode
    selected?: string
}

interface ElementProps extends HTMLAttributes<HTMLButtonElement> {}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(({ children, orientation, variant, selected = '', className, ...props }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const handleSelection = (idx: number) => setSelectedIndex(idx)

    return (
        <div className={cn(buttonGroupVariants({ orientation, variant, className }))} {...props} ref={ref}>
            {Children.map(children, (child, idx) =>
                isValidElement(child) ? (
                    <div className="flex">
                        {cloneElement<ElementProps>(child as ReactElement, {
                            onClick: () => handleSelection(idx),
                            className: cn(
                                'rounded-none text-[#344054] font-jakarta',
                                { 'active bg-[#E6EDF4]': selected === child.props.value || selectedIndex === idx },
                                child.props.className
                            ),
                        })}
                        {idx !== Children.count(children) - 1 && <Separator orientation="vertical" />}
                    </div>
                ) : (
                    child
                )
            )}
        </div>
    )
})
