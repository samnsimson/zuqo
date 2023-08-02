import { useAppStore } from '../../store'

function App() {
    const { bears, increase } = useAppStore((store) => store)
    return (
        <div>
            App component {bears}
            <button onClick={() => increase(1)}>increase</button>
        </div>
    )
}

export default App
