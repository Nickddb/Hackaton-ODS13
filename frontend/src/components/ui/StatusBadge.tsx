import type { Severity } from '@/types/climate'
import './ui.css'

const labels: Record<Severity, string> = { normal: 'Normal', atencao: 'Atenção', alerta: 'Alerta', critico: 'Crítico' }

export function StatusBadge({ status, label }: { status: Severity; label?: string }) {
  return <span className={`badge badge-${status}`}><span aria-hidden="true">●</span>{label ?? labels[status]}</span>
}
