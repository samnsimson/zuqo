import { PlusIcon } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'
import { Button } from '../ui/button'
import { EditorReturnType } from '@/types/types'

interface EditorToolBoxProps extends HTMLAttributes<HTMLDivElement> {
    editor: EditorReturnType['editor']
}

export const EditorToolBox: FC<EditorToolBoxProps> = ({ editor, ...props }) => {
    const addNewNode = () => {
        editor.addNode('New Node', { output: true, input: true }).then((node) => console.log(node))
    }

    return (
        <div {...props} className="absolute bottom-0 w-full bg-gradient-to-r from-sky-100 to-[#E1D3DC] p-2">
            <ul>
                <Button variant="ghost" onClick={() => addNewNode()}>
                    <PlusIcon />
                </Button>
            </ul>
        </div>
    )
}
