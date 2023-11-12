import { CustomSocket } from '@/components/editor/socket'
import { CustomNode } from '@/components/editor/customNode'
import { createRoot } from 'react-dom/client'
import { NodeEditor, GetSchemes, ClassicPreset } from 'rete'
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { HistoryExtensions, HistoryPlugin, Presets as HistoryPresets } from 'rete-history-plugin'
import { ReactPlugin, Presets, ReactArea2D } from 'rete-react-plugin'
import { CustomConnection } from '@/components/editor/connection'
import { StartNode } from '@/components/editor/startNode'
import { NotesNode } from '@/components/editor/notes'
import { ExitNode } from '@/components/editor/exitNode'
import { MenuNode } from '@/components/editor/menuNode'

class Connection<N extends ClassicPreset.Node> extends ClassicPreset.Connection<N, N> {}

type Schemes = GetSchemes<ClassicPreset.Node, Connection<ClassicPreset.Node>>
type AreaExtra = ReactArea2D<Schemes>

export class Editor {
    constructor(
        protected container: HTMLElement,
        protected socket: ClassicPreset.Socket,
        protected editor: NodeEditor<Schemes>,
        protected area: AreaPlugin<Schemes, AreaExtra>,
        protected connection: ConnectionPlugin<Schemes, AreaExtra>,
        protected render: ReactPlugin<Schemes, AreaExtra>,
        protected history: HistoryPlugin<Schemes>
    ) {}

    static init = async (container: HTMLElement) => {
        const socket = new ClassicPreset.Socket('socket')
        const editor = new NodeEditor<Schemes>()
        const area = new AreaPlugin<Schemes, AreaExtra>(container)
        const connection = new ConnectionPlugin<Schemes, AreaExtra>()
        const render = new ReactPlugin<Schemes, AreaExtra>({ createRoot })
        const history = new HistoryPlugin<Schemes>()

        const renderPresetNode = (label: string) => {
            if (label === 'start') return StartNode
            if (label === 'custom') return CustomNode
            if (label === 'notes') return NotesNode
            if (label === 'exit') return ExitNode
            if (label === 'menu') return MenuNode
            return Presets.classic.Node
        }

        const renderPresetSocket = () => CustomSocket
        const renderPresetConnection = () => CustomConnection

        render.addPreset(
            Presets.classic.setup({
                customize: {
                    node: ({ payload: { label } }) => renderPresetNode(label),
                    socket: () => renderPresetSocket(),
                    connection: () => renderPresetConnection(),
                },
            })
        )
        connection.addPreset(ConnectionPresets.classic.setup())
        history.addPreset(HistoryPresets.classic.setup())

        editor.use(area)
        area.use(connection)
        area.use(render)
        area.use(history)

        HistoryExtensions.keyboard(history)
        AreaExtensions.selectableNodes(area, AreaExtensions.selector(), { accumulating: AreaExtensions.accumulateOnCtrl() })
        AreaExtensions.simpleNodesOrder(area)
        AreaExtensions.snapGrid(area, { size: 10 })

        return new Editor(container, socket, editor, area, connection, render, history)
    }

    public destroy = () => this.area.destroy()

    public addNode = async (label: string) => {
        const node = new ClassicPreset.Node(label)
        await this.editor.addNode(node)
        await this.setNodePosition(node.id, 0, 0)
        return node
    }

    public addNodeInput = (id: string, key: string = '') => {
        const targetNode = this.editor.getNode(id)
        if (!targetNode) return
        targetNode.addInput(key, new ClassicPreset.Input(this.socket, key))
    }

    public addNodeOutput = (id: string, key: string = '') => {
        const targetNode = this.editor.getNode(id)
        if (!targetNode) return
        targetNode.addOutput(key, new ClassicPreset.Output(this.socket, key))
    }

    public setNodePosition = async (node: any, x: number, y: number) => await this.area.translate(node.id, { x, y })

    public addConnection = async (source: ClassicPreset.Node, target: ClassicPreset.Node) => {
        await this.editor.addConnection(new ClassicPreset.Connection(source, source.id, target, target.id))
    }

    public getNodes = async () => Promise.resolve(this.editor.getNodes())

    public display = () => AreaExtensions.zoomAt(this.area, this.editor.getNodes())

    public flowInfo = () => ({ nodes: this.editor.getNodes(), connections: this.editor.getConnections() })

    public deleteNode = async (id: string) => await this.editor.removeNode(id)

    public addSocket = () => {}
}
