import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '@/store/auth-store'
import { PublicHome, LoginPage } from '@/pages/public/PublicPages'
import { AppLayout } from '@/layouts/AppLayout'
import { MonitoringPage, TemperaturePage, HistoryPage, SettingsPage, MapPage } from '@/pages/app/Pages'
import { DashboardPage } from '@/pages/app/DashboardPage'
import { AlertsPage, AlertDetailsPage, AlertOccurrencePage } from '@/pages/app/AlertPages'

function Protected() { return useAuthStore(s => s.authenticated) ? <AppLayout /> : <Navigate to="/login" replace /> }
export function App() { return <Routes>
  <Route path="/" element={<PublicHome />} /><Route path="/login" element={<LoginPage />} />
  <Route path="/app" element={<Protected />}><Route index element={<Navigate to="dashboard" replace />} /><Route path="dashboard" element={<DashboardPage />} /><Route path="monitoramento" element={<MonitoringPage />} /><Route path="temperatura" element={<TemperaturePage />} /><Route path="alertas" element={<AlertsPage />} /><Route path="alertas/:id" element={<AlertDetailsPage />} /><Route path="alertas/:id/ocorrencia" element={<AlertOccurrencePage />} /><Route path="mapa" element={<MapPage />} /><Route path="historico" element={<HistoryPage />} /><Route path="configuracoes" element={<SettingsPage />} /></Route>
  <Route path="*" element={<main className="not-found"><h1>404</h1><p>Página não encontrada.</p><a href="/">Voltar ao início</a></main>} />
  </Routes> }
