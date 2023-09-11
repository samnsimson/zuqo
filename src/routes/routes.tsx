import { HashRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/pages/login'
import { Dashboard } from '@/pages/dashboard'
import { OverviewPage } from '@/pages/dashboard/overview'
import { WorkflowStudio } from '@/pages/dashboard/workflow-studio'
import { InteractionCenterPage } from '@/pages/dashboard/interaction-center'
import { AudioJson } from '@/pages/mock-pages/audioJson'
import { WorkFlowOverviewPage } from '@/pages/dashboard/workflow-studio/pages/overview'
import { WorkflowListPage } from '@/pages/dashboard/workflow-studio/pages/list'
import { InsightsPage } from '@/pages/dashboard/workflow-studio/pages/insights'
import { AiAnalytics } from '@/pages/dashboard/ai-analytics'
import { Interactions } from '@/pages/dashboard/interaction-center/interactions'
import { InteractionCenterHome } from '@/pages/dashboard/interaction-center/home'
import { InteractionCenterDashboard } from '@/pages/dashboard/interaction-center/dashboard'

export const AppRotues = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<OverviewPage />} />
                    <Route path="workflow-studio" element={<WorkflowStudio />}>
                        <Route index element={<WorkFlowOverviewPage />} />
                        <Route path="list" element={<WorkflowListPage />} />
                        <Route path="insights" element={<InsightsPage />} />
                    </Route>
                    <Route path="interaction-center" element={<InteractionCenterHome />}>
                        <Route index element={<InteractionCenterPage />} />
                        <Route path="dashboard" element={<InteractionCenterDashboard />} />
                        <Route path="interactions" element={<Interactions />} />
                    </Route>
                    <Route path="ai-analytics" element={<AiAnalytics />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="audio-json" element={<AudioJson />} />
            </Routes>
        </HashRouter>
    )
}
