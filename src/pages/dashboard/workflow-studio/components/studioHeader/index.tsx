import { AnnotationIcon, CloudErrorIcon, CompareIcon, ExchangeIcon, ExpandIcon, HexagonSettingIcon, PlaySquareIcon, SaveFileIcon } from '@/assets/svg/icons'
import { Button } from '@/ui/button'
import { assets } from '@/config/assets'
import { EditorReturnType } from '@/types/types'
import { BellIcon, MoreVertical } from 'lucide-react'
import { FC, HTMLAttributes, useEffect } from 'react'
import { useAppStore } from '@/store'
import { useLocation } from 'react-router-dom'

interface StudioHeaderProps extends HTMLAttributes<HTMLDivElement> {
    editor: EditorReturnType['editor']
}

export const StudioHeader: FC<StudioHeaderProps> = ({ editor, ...props }) => {
    const { workflows, addToWorkflows } = useAppStore((state) => state)
    const { search } = useLocation()
    const params = new URLSearchParams(search)
    const id = params.get('id')

    useEffect(() => {
        console.log(workflows)
    }, [workflows])

    return (
        <div {...props} className="flex items-center justify-between border-b border-b-gray-200 bg-white p-4 shadow">
            <div className="flex items-center space-x-6">
                <div className="space-x-2">
                    <span className="font-jakarta text-xs font-medium text-sky-600">Workflows</span>
                    <span className="text-gray-600">/</span>
                    <span className="font-jakarta text-xs font-normal text-sky-700">New Workflow</span>
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <ul className="flex items-center space-x-6">
                    <li>
                        <p className="flex space-x-3 font-semibold text-[#EF0404]">
                            <CloudErrorIcon /> <span>Fix 2 issues</span>
                        </p>
                    </li>
                    <li className="cursor-pointer">
                        <ul className="flex items-center space-x-2">
                            <li>
                                <img src={assets.kiranmaiKulakarni} alt="avatars" />
                            </li>
                            <li>
                                <img src={assets.preetham} alt="avatars" />
                            </li>
                        </ul>
                    </li>
                    <li className="cursor-pointer">
                        <CompareIcon />
                    </li>
                    <li className="cursor-pointer">
                        <ExchangeIcon />
                    </li>
                    <li className="cursor-pointer">
                        <BellIcon />
                    </li>
                    <li className="cursor-pointer">
                        <AnnotationIcon />
                    </li>
                    <li className="cursor-pointer">
                        <HexagonSettingIcon />
                    </li>
                    <li className="cursor-pointer">
                        <ExpandIcon />
                    </li>
                    <li className="cursor-pointer" onClick={() => id && addToWorkflows({ [id]: editor.flowInfo() })}>
                        <SaveFileIcon />
                    </li>
                    <li className="cursor-pointer">
                        <MoreVertical />
                    </li>
                </ul>
                <Button variant="primary" className="space-x-3 text-white">
                    <PlaySquareIcon />
                    <span>Test</span>
                </Button>
            </div>
        </div>
    )
}
