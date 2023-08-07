import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/pages/login'
import { Dashboard } from '@/pages/dashboard'
import { OverviewPage } from '@/pages/dashboard/overview'
import { WorkflowStudio } from '@/pages/dashboard/workflow-studio'
import { InteractionCenterPage } from '@/pages/dashboard/interaction-center'
import { AudioJson } from '@/pages/mock-pages/audioJson'

export const AppRotues = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index path="/overview" element={<OverviewPage />} />
                    <Route path="/workflow-studio" element={<WorkflowStudio />} />
                    <Route path="/interaction-center" element={<InteractionCenterPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/audio-json" element={<AudioJson />} />
            </Routes>
        </BrowserRouter>
    )
}
