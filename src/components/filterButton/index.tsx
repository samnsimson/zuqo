import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { cn, uniqueBy } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../ui/command'
import { Check } from 'lucide-react'
import { FilterIcon } from '@/assets/svg/icons'

interface FilterButtonProps extends HTMLAttributes<HTMLButtonElement> {
    [x: string]: any
    label: string
    value: LabelValue[]
    multiselect?: boolean
}

interface LabelValue {
    label: string
    value: string
    default?: boolean
}

export const FilterButton: FC<FilterButtonProps> = ({ className, label, value, multiselect = false, ...props }) => {
    const [filterValues, setFilterValues] = useState<LabelValue[]>([])
    const [open, setOpen] = useState(false)
    const [activeValue, setActiveValue] = useState<string[]>([])

    const handleOnSelect = (currentValue: string) => {
        setActiveValue((state) => {
            if (!multiselect) return [currentValue]
            if (state.indexOf(currentValue) === -1) return [...state, currentValue]
            return state.filter((s) => s !== currentValue)
        })
        setOpen(false)
    }

    const getLabelValue = (activeValue: string[], filterValues: LabelValue[]) => {
        if (!activeValue.length) return ''
        const targetValue = filterValues.find(({ value }) => activeValue.includes(value))
        return targetValue ? (activeValue.length > 1 ? targetValue.label + ` & ${activeValue.length - 1} more` : targetValue.label) : ''
    }

    useEffect(() => {
        if (value.length) setFilterValues((state) => uniqueBy([...state, ...value], 'label'))
    }, [value])

    useEffect(() => {
        const defaultValue = filterValues.find((value) => value.default === true)
        if (defaultValue) setActiveValue([defaultValue.value])
    }, [filterValues])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn('inline-flex items-center justify-center gap-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 shadow', className)}
                    {...props}
                >
                    <span className="text-sm font-normal leading-tight text-slate-700">{label}: </span>
                    <span className="text-sm font-bold leading-tight text-slate-700">{getLabelValue(activeValue, filterValues)}</span>
                    <FilterIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No match found.</CommandEmpty>
                    <CommandGroup>
                        {filterValues.map(({ label, value }) => (
                            <CommandItem key={value} onSelect={(currentValue) => handleOnSelect(currentValue)}>
                                <Check className={cn('mr-2 h-4 w-4', activeValue.includes(value) ? 'opacity-100' : 'opacity-0')} />
                                {label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
