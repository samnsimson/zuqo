import { CustomNodeProps } from '@/types/types'
import { ClassicScheme, Presets } from 'rete-react-plugin'
import { Inputs } from './nodeInput'
import { Outputs } from './nodeOutput'
import { Node, NodeContainer } from './node'
import { useNodeTemplate } from '@/hooks/useNodeTemplate'
import { MenuBarIcon } from '@/assets/svg/icons'

export const MenuNode = <Scheme extends ClassicScheme>(props: CustomNodeProps<Scheme>) => {
    const { inputs, outputs, controls, selected } = useNodeTemplate(props)
    const { id, label } = props.data
    const { RefControl } = Presets.classic

    return (
        <NodeContainer className="relative flex flex-row items-center">
            <Node label={label} id={id} selected={selected} icon={<MenuBarIcon width={16} height={16} />} {...props}>
                <div className="flex items-start justify-between">
                    <Inputs inputs={inputs} nodeId={id} props={props} />
                    <Outputs outputs={outputs} nodeId={id} props={props} />
                </div>
            </Node>
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </NodeContainer>
    )
}
