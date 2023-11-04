import { CustomNodeProps } from '@/types/types'
import { ClassicScheme, Presets } from 'rete-react-plugin'
import { Inputs } from './nodeInput'
import { Outputs } from './nodeOutput'
import { Node, NodeContainer } from './node'
import { useNodeTemplate } from '@/hooks/useNodeTemplate'
import { HexagonIcon, MoreVerticalIcon } from 'lucide-react'

export const MenuNode = <Scheme extends ClassicScheme>(props: CustomNodeProps<Scheme>) => {
    const { inputs, outputs, controls, selected } = useNodeTemplate(props)
    const { id, label } = props.data
    const { RefControl } = Presets.classic

    return (
        <NodeContainer className="relative flex flex-row items-center">
            {inputs.map(([key, input]) => input && <Inputs key={key} input={input} nodeId={id} props={props} />)}
            <Node label={label} id={id} selected={selected} {...props}>
                <div className="flex items-center justify-end space-x-3">
                    <HexagonIcon size={18} className="cursor-pointer opacity-60" color="#4E545F" />
                    <MoreVerticalIcon size={18} className="cursor-pointer opacity-60" color="#4E545F" />
                </div>
            </Node>
            {outputs.map(([key, output]) => output && <Outputs key={key} output={output} nodeId={id} props={props} />)}
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </NodeContainer>
    )
}
