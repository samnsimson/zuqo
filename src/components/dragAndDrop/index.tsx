import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { useDrag } from 'react-dnd'

interface DragAndDropProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const DragAndDrop: FC<DragAndDropProps> = ({ children, ...props }) => {
    console.log('🚀 ~ file: index.tsx:10 ~ children:', children)
    const [{ isDragging }, dragRef] = useDrag(() => ({ type: '', item: { children }, collect: (monitor) => ({ isDragging: monitor.isDragging() }) }))
    return (
        <div ref={dragRef} {...props} className={cn({ 'opacity-70': isDragging })}>
            {children}
        </div>
    )
}
