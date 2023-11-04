import { GitCompare, GripVertical, LogInIcon, PlusIcon, SettingsIcon, SquareDot, StarIcon } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'
import { EditorReturnType, NodeTypes } from '@/types/types'
import { cn } from '@/lib/utils'
import { MenuDropdown, MenuGroup } from '../menuDropdown'
import { v4 as uuid } from 'uuid'

interface EditorToolBoxProps extends HTMLAttributes<HTMLDivElement> {
    editor: EditorReturnType['editor']
}

interface CommonToolboxProps {
    editor?: EditorReturnType['editor']
}

interface DragProps extends HTMLAttributes<HTMLLIElement>, CommonToolboxProps {
    [x: string]: any
}

interface ToolsProps extends HTMLAttributes<HTMLLIElement>, CommonToolboxProps {
    [x: string]: any
    editor: EditorReturnType['editor']
}

interface LogicProps extends HTMLAttributes<HTMLLIElement>, CommonToolboxProps {
    [x: string]: any
}

interface ModulesProps extends HTMLAttributes<HTMLLIElement>, CommonToolboxProps {
    [x: string]: any
}

interface FavProps extends HTMLAttributes<HTMLLIElement>, CommonToolboxProps {
    [x: string]: any
}

const Drag: FC<DragProps> = ({ className, ...props }) => {
    return (
        <li className={cn('flex min-w-[74px] cursor-pointer flex-col items-center justify-center space-y-1', className)} {...props}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg p-1 text-[#4E545F]">
                <GripVertical />
            </div>
        </li>
    )
}

const Tools: FC<ToolsProps> = ({ className, editor, ...props }) => {
    const menu: MenuGroup[] = [
        {
            label: 'General',
            menu: [
                {
                    id: uuid(),
                    name: 'Start Node',
                    type: 'action',
                    action: () => editor.addNode('start', { output: true }),
                    icon: <LogInIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
                {
                    id: uuid(),
                    name: 'End Node',
                    type: 'action',
                    action: () => editor.addNode('exit', { input: true }),
                    icon: <LogInIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
                {
                    id: uuid(),
                    name: 'Stickers',
                    type: 'action',
                    action: () => null,
                    icon: <StarIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
                {
                    id: uuid(),
                    name: 'Card',
                    type: 'action',
                    action: () => null,
                    icon: <StarIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
            ],
        },
        {
            label: 'Speech',
            menu: [
                {
                    id: uuid(),
                    name: 'Text to speech',
                    type: 'action',
                    action: () => null,
                    icon: <LogInIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
                {
                    id: uuid(),
                    name: 'Audio',
                    type: 'action',
                    action: () => null,
                    icon: <LogInIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
                {
                    id: uuid(),
                    name: 'Menu',
                    type: 'action',
                    action: () => editor.addNode('menu', { input: true, output: true }),
                    icon: <StarIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
                {
                    id: uuid(),
                    name: 'Capture Info',
                    type: 'action',
                    action: () => null,
                    icon: <StarIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
                {
                    id: uuid(),
                    name: 'Date',
                    type: 'action',
                    action: () => null,
                    icon: <StarIcon color="#00539F" className="rounded bg-[#F8F8FA] p-2" size={32} />,
                },
            ],
        },
    ]
    return (
        <MenuDropdown menu={menu} side="top">
            <li className={cn('flex min-w-[74px] cursor-pointer flex-col items-center justify-center space-y-1', className)} {...props}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4AB16] p-1 text-white">
                    <SettingsIcon />
                </div>
                <h4 className="font-inter text-xs font-semibold uppercase text-[#101828] opacity-50">Tools</h4>
            </li>
        </MenuDropdown>
    )
}

const Logic: FC<LogicProps> = ({ className, ...props }) => {
    return (
        <li className={cn('flex min-w-[74px] cursor-pointer flex-col items-center justify-center space-y-1', className)} {...props}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#169AE4] p-1 text-white">
                <GitCompare />
            </div>
            <h4 className="font-inter text-xs font-semibold uppercase text-[#101828] opacity-50">Logic</h4>
        </li>
    )
}

const Modules: FC<ModulesProps> = ({ className, ...props }) => {
    return (
        <li className={cn('flex min-w-[74px] cursor-pointer flex-col items-center justify-center space-y-1', className)} {...props}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4C16E4] p-1 text-white">
                <SquareDot />
            </div>
            <h4 className="font-inter text-xs font-semibold uppercase text-[#101828] opacity-50">Modules</h4>
        </li>
    )
}

const Favourites: FC<FavProps> = ({ className, ...props }) => {
    return (
        <li className={cn('flex min-w-[74px] cursor-pointer flex-col items-center justify-center space-y-1', className)} {...props}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#949494] p-1 text-white">
                <PlusIcon />
            </div>
            <h4 className="font-inter text-xs font-semibold uppercase text-[#101828] opacity-50">Favourites</h4>
        </li>
    )
}

export const EditorToolBox: FC<EditorToolBoxProps> = ({ editor, ...props }) => {
    const addNewNode = (label: NodeTypes) => {
        editor.addNode(label, { output: true, input: true }).then((node) => console.log(node))
    }

    return (
        <div {...props} className="absolute bottom-0 z-10 grid w-full grid-cols-12 bg-gradient-to-r from-sky-100 to-[#E1D3DC] p-2">
            <ul className="col-span-4 flex items-center justify-start space-x-3">
                <Drag editor={editor} onClick={() => addNewNode('custom')} />
                <Tools editor={editor} />
                <Logic editor={editor} />
                <Modules editor={editor} />
                <Favourites editor={editor} />
            </ul>
        </div>
    )
}
