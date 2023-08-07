import { assets } from '@/config/assets'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface BreadCrumbsProps {
    [x: string]: any
}

type PathProps = {
    name: string
    path: string
}

export const BreadCrumbs: FC<BreadCrumbsProps> = () => {
    const [paths, setPaths] = useState<PathProps[]>([])

    useEffect(() => {
        setPaths([
            {
                name: 'Interactions',
                path: '',
            },
            {
                name: 'Preetam Kumar',
                path: '',
            },
        ])
    }, [])

    return (
        <div className="my-2 flex h-10 w-full items-center justify-between">
            <div className="flex items-center">
                {paths.map(({ name, path }, key) => (
                    <div key={key} className="flex">
                        <Link to={path} className="text-xs">
                            {name}
                        </Link>
                        {key !== paths.length - 1 && <img src={assets.slash} alt="slash" className="mx-2" />}
                    </div>
                ))}
            </div>
        </div>
    )
}
