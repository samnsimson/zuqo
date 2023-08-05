import { useWaveForm } from '@/hooks/useWaveForm'
import { cn, secondsToHms } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import { Progress } from './ui/progress'
import { Slider } from './ui/slider'

interface AudioPlayerProps extends HTMLAttributes<HTMLDivElement> {
    url: string
}

export const AudioPlayer: FC<AudioPlayerProps> = ({ className, url, ...props }) => {
    const containerRef = useRef(null)
    const waveForm = useWaveForm(containerRef, url)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [volume, setVolume] = useState(80)

    const playPauseAudio = () => {
        waveForm && waveForm.playPause()
    }

    useEffect(() => {
        if (!waveForm) return
        waveForm.on('interaction', () => waveForm.playPause())
        waveForm.on('decode', (duration) => setDuration(duration))
        waveForm.on('timeupdate', (currentTime) => setCurrentTime(currentTime))
    }, [waveForm])

    useEffect(() => {
        if (!waveForm) return
        waveForm.setVolume(volume / 100)
    }, [waveForm, volume])

    return (
        <div className={cn('absolute bottom-0 max-h-[100px] w-full bg-[#848687] px-10 py-2.5', className)} {...props}>
            <div ref={containerRef} className="flex flex-col-reverse">
                <div className="mt-2 grid grid-cols-24 items-center gap-2 rounded-full bg-[#616669] py-2 pl-4 pr-2">
                    <div className="col-span-1 cursor-pointer" onClick={playPauseAudio}>
                        <img src="pause-icon.svg" alt="play pause" />
                    </div>
                    <div className="col-span-4">
                        <div className="flex items-center space-x-1 text-sm tracking-tighter text-white">
                            <span>{secondsToHms(currentTime)}</span>
                            <span>/</span>
                            <span>{secondsToHms(duration)}</span>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="flex-grow">
                            <Progress value={(currentTime / duration) * 100} className="h-1 bg-[#D0E4F1]" />
                        </div>
                    </div>
                    <div className="col-span-7 flex items-center justify-between space-x-[6px] rounded-full bg-[#D4EEFF33] px-2 py-1">
                        <Slider value={[volume]} max={100} step={1} onValueChange={(vol) => setVolume(vol[0])} />
                        <div>
                            <img src="volume-up.svg" alt="volume up" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
