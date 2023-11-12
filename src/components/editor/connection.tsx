import { Presets } from 'rete-react-plugin'

// const Svg = styled.svg`
//   overflow: visible !important;
//   position: absolute;
//   pointer-events: none;
//   width: 9999px;
//   height: 9999px;
// `;

// const Path = styled.path<{ styles?: (props: any) => any }>`
//   fill: none;
//   strokeWidth: 5px;
//   stroke: black;
//   pointer-events: auto;
//   ${(props) => props.styles && props.styles(props)}
// `;

export const CustomConnection = () => {
    const { useConnection } = Presets.classic
    const { path } = useConnection()

    if (!path) return null

    return (
        <svg data-testid="connection" className="pointer-events-none absolute h-[9999px] w-[9999px] overflow-visible">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
                    <path d="M 0 0 L 5 5 L 10 10 z" fill="#B2C1E7" />
                </marker>
            </defs>
            <path fill="none" stroke="#B2C1E7" strokeWidth="5px" d={path} className="pointer-events-auto" strokeOpacity="0.9" markerEnd="url(#arrowheadd)" />
        </svg>
    )
}
