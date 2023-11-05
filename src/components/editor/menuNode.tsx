import { CustomNodeProps } from '@/types/types'
import { ClassicScheme, Presets } from 'rete-react-plugin'
import { Inputs } from './nodeInput'
import { Outputs } from './nodeOutput'
import { Node, NodeContainer } from './node'
import { useNodeTemplate } from '@/hooks/useNodeTemplate'

export const MenuNode = <Scheme extends ClassicScheme>(props: CustomNodeProps<Scheme>) => {
    const { inputs, outputs, controls, selected } = useNodeTemplate(props)
    const { id, label } = props.data
    const { RefControl } = Presets.classic

    return (
        <NodeContainer className="relative flex flex-row items-center">
            {inputs.map(([key, input]) => input && <Inputs key={key} input={input} nodeId={id} props={props} />)}
            <Node label={label} id={id} selected={selected} {...props} />
            {outputs.map(([key, output]) => output && <Outputs key={key} output={output} nodeId={id} props={props} />)}
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </NodeContainer>
    )
}
