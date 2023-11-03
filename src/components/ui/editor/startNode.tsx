import { CustomNodeProps } from '@/types/types'
import { ClassicScheme, Presets } from 'rete-react-plugin'
import { Inputs } from './nodeInput'
import { Outputs } from './nodeOutput'
import { Node } from './node'
import { StartFlag } from '@/assets/svg/icons'
import { useNodeTemplate } from '@/hooks/useNodeTemplate'

export const StartNode = (props: CustomNodeProps<ClassicScheme>) => {
    const { inputs, outputs, controls, selected } = useNodeTemplate(props)
    const { id, label } = props.data
    const { RefControl } = Presets.classic

    return (
        <div className="flex flex-row items-center space-x-4">
            <div className="">
                <StartFlag />
            </div>
            {inputs.map(([key, input]) => input && <Inputs key={key} input={input} nodeId={id} props={props} />)}
            <Node label={label} id={id} selected={selected}>
                <p className="font-jakarta text-xs text-[#4E545F]">Where your bot begins</p>
            </Node>
            {outputs.map(([key, output]) => output && <Outputs key={key} output={output} nodeId={id} props={props} />)}
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </div>
    )
}
