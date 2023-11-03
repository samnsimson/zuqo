import { useNodeTemplate } from '@/hooks/useNodeTemplate'
import { CustomNodeProps } from '@/types/types'
import { ClassicScheme } from 'rete-react-plugin'

export const NotesNode = (props: CustomNodeProps<ClassicScheme>) => {
    useNodeTemplate(props)
    return (
        <div className="max-w-xs overflow-hidden rounded-lg border-2 border-white bg-[#E6FBF7] shadow-lg">
            <div className="bg-[#87C9CD] p-3 font-semibold uppercase text-white">Notes card</div>
            <div className="p-3">
                <h3 className="mb-3 font-inter text-lg font-semibold text-[#4E545F] opacity-70">How to finish your Journey</h3>
                <ol className="space-y-3 font-inter text-xs leading-6 text-[#4E545F]">
                    <li>Open (double-click) the Start node to configure it</li>
                    <li>[Optional] add more steps or modules (see “How to choose Steps”)</li>
                    <li>Connect the steps together (drag an arrow from the right side of each step)</li>
                    <li>Configure the end Step, and click “Test Flow”.</li>
                </ol>
            </div>
        </div>
    )
}
