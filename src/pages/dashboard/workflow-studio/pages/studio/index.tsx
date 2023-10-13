import { FC, HTMLAttributes } from 'react'
import { StudioHeader } from '../../components/studioHeader'
import { WorkBoard } from '../../components/workBoard'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface StudioProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const Studio: FC<StudioProps> = ({ ...props }) => {
    const { search } = useLocation()
    const navigate = useNavigate()
    const params = new URLSearchParams(search)
    const intent = params.get('intent')

    if (!intent || !['create', 'edit', 'view'].includes(intent)) {
        return (
            <div className="flex flex-grow flex-col items-center justify-center">
                <Card>
                    <CardContent className="flex flex-col space-y-5 p-8">
                        <p>Cannot view Workflow Studio</p>
                        <Button variant="primary" className="space-x-3 text-white" onClick={() => navigate('/workflow-studio/studio?intent=create')}>
                            <Plus /> <span>Create New Workflow</span>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div {...props} className="flex flex-grow flex-col">
            <StudioHeader />
            <div className="relative h-full">
                <WorkBoard />
            </div>
        </div>
    )
}
