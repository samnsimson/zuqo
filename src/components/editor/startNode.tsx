import { CustomNodeProps } from '@/types/types'
import { ClassicScheme, Presets } from 'rete-react-plugin'
import { Outputs } from './nodeOutput'
import { Node } from './node'
import { StartFlag } from '@/assets/svg/icons'
import { useNodeTemplate } from '@/hooks/useNodeTemplate'
import { LogInIcon } from 'lucide-react'

export const StartNode = <Scheme extends ClassicScheme>(props: CustomNodeProps<Scheme>) => {
    const { outputs, controls, selected } = useNodeTemplate(props)
    const { id, label } = props.data
    const { RefControl } = Presets.classic

    return (
        <div className="flex flex-row items-center space-x-4">
            <div className="">
                <StartFlag />
            </div>
            <div className="fixed left-0 right-[10px] z-10 flex items-start justify-end">
                <Outputs outputs={outputs} nodeId={id} props={props} />
            </div>
            <Node label={label} id={id} selected={selected} icon={<LogInIcon size={16} />} {...props}>
                <p className="font-jakarta text-xs text-[#4E545F]">Where your bot begins</p>
                {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
            </Node>
        </div>
    )
}
