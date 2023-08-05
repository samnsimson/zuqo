import { RefObject, useEffect, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

export const useWaveForm = (containerRef: RefObject<HTMLDivElement>, url: string) => {
    const [waveForm, setWaveForm] = useState<WaveSurfer | null>(null)

    useEffect(() => {
        if (!containerRef.current) return
        const ws = WaveSurfer.create({
            container: containerRef.current,
            url: url,
            height: 32,
            waveColor: '#c6c6c6',
            progressColor: '#ffffff',
            barHeight: 2,
            barWidth: 2,
            barRadius: 2,
            barGap: 2,
        })
        setWaveForm(ws)
        return () => ws.destroy()
    }, [url, containerRef])

    return waveForm
}
