export type Severity = 'normal' | 'atencao' | 'alerta' | 'critico'

export interface Station {
  id: string
  name: string
  city: string
  state: string
  provider: string
  reliability: number
  lastSyncAt: string
}

export interface ClimateMetric {
  id: string
  label: string
  value: number
  unit: string
  status: Severity
  detail: string
}

export interface ClimateAlert {
  id: string
  title: string
  description: string
  category: string
  severity: Severity
  station: string
  value: number
  unit: string
  safeLimit: string
  createdAt: string
  resolved: boolean
}

export interface Sensor {
  id: string
  name: string
  location: string
  parameters: string[]
  battery: number
  latency: number
  calibration: string
  status: Severity
}
