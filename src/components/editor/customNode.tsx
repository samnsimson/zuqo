import { ClassicScheme, Presets, RenderEmit } from 'rete-react-plugin'
import { Inputs } from './nodeInput'
import { Outputs } from './nodeOutput'
import { Node } from './node'
import { useNodeTemplate } from '@/hooks/useNodeTemplate'

type NodeExtraData = { [x: string]: any }

type Props<S extends ClassicScheme> = {
    data: S['Node'] & NodeExtraData
    styles?: () => any
    emit: RenderEmit<S>
}

export const CustomNode = <Scheme extends ClassicScheme>(props: Props<Scheme>) => {
    const { inputs, outputs, controls, selected } = useNodeTemplate(props)
    const { id, label } = props.data
    const { RefControl } = Presets.classic

    return (
        <div className="flex flex-row items-center">
            <div className="flex flex-col space-y-2">
                {inputs.map(([key, input]) => input && <Inputs key={key} inputs={inputs} nodeId={id} props={props} />)}
            </div>
            <Node id={id} selected={selected} label={label} />
            {outputs.map(([key, output]) => output && <Outputs key={key} outputs={outputs} nodeId={id} props={props} />)}
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </div>
    )
}
