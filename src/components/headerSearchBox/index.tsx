import { HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { Input } from '../../ui/input'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Button } from '../../ui/button'

const headerSearchBoxVariants = cva(
    'border-none bg-transparent focus:border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 transition-opacity overflow-hidden',
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

interface HeaderSearchBoxProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'placeholder'>, VariantProps<typeof headerSearchBoxVariants> {
    leftIcon?: string
    rightIcon?: string
    placeholder?: string[]
    width?: number
}

export const HeaderSearchBox = forwardRef<HTMLInputElement, HeaderSearchBoxProps>(
    ({ className, variant, size, width, leftIcon = null, rightIcon = null, placeholder, ...props }, ref) => {
        const [searchText, setSearchText] = useState('')
        const [currentIndex, setCurrentIndex] = useState<number>(0)
        const [toggleAnimation, setToggleAnimation] = useState(true)

        useEffect(() => {
            if (!placeholder || placeholder.length === 1) return
            const index = setInterval(() => {
                setToggleAnimation(() => (searchText.length === 0 ? true : false))
                setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholder.length)
            }, 5000)
            return () => clearInterval(index)
        }, [placeholder, searchText])

        return (
            <div className={cn('flex max-h-[45px] items-center gap-2 rounded-lg bg-white p-2.5 shadow')} style={{ width: width ? `${width}px` : '785px' }}>
                {leftIcon && <img src={leftIcon} alt="searchbox icon" />}
                <Input
                    {...props}
                    ref={ref}
                    placeholder={placeholder ? placeholder[currentIndex] : ''}
                    className={cn({ 'animate-fadeUpAndReveal': toggleAnimation }, headerSearchBoxVariants({ variant, size, className }))}
                    onAnimationEnd={() => setToggleAnimation(false)}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button variant="ghost" className="p-2">
                    {rightIcon && <img src={rightIcon} alt="searchbox icon" />}
                </Button>
            </div>
        )
    }
)
