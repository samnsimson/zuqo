import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export const headerVariants = cva(['min-h-[64px] grid w-full items-center', 'px-6 py-4', 'text-white'], {
    variants: {
        variant: {
            primary: ['bg-gradient-to-r from-color-primary via-color-primary to-color-primary'],
            transparent: ['bg-transparent'],
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface HeaderVariants extends VariantProps<typeof headerVariants> {}

export const header = (variants: HeaderVariants) => twMerge(headerVariants(variants))
