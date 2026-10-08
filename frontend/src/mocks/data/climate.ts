import type { ClimateAlert, ClimateMetric, Sensor, Station } from '@/types/climate'

export const stations: Station[] = [
  { id: 'BR-SP-04', name: 'Estação Central', city: 'Sorocaba', state: 'SP', provider: 'Defesa Civil / INMET', reliability: 99.4, lastSyncAt: 'há 2 min' },
  { id: 'BR-SP-04B', name: 'Parque Tecnológico', city: 'Sorocaba', state: 'SP', provider: 'Defesa Civil', reliability: 98.7, lastSyncAt: 'há 4 min' },
  { id: 'BR-SP-07', name: 'Vale do Paraíba', city: 'São José dos Campos', state: 'SP', provider: 'INMET', reliability: 97.9, lastSyncAt: 'há 6 min' },
]

export const currentMetrics: ClimateMetric[] = [
  { id: 'temperature', label: 'Temperatura', value: 24, unit: '°C', status: 'normal', detail: 'Faixa esperada: 18°C a 30°C' },
  { id: 'humidity', label: 'Umidade', value: 62, unit: '%', status: 'normal', detail: 'Faixa saudável: 50% a 70%' },
  { id: 'wind', label: 'Vento', value: 14, unit: 'km/h', status: 'normal', detail: 'Direção: Sudeste' },
  { id: 'thermal', label: 'Sensação', value: 25, unit: '°C', status: 'normal', detail: 'Índice de calor neutro' },
  { id: 'uv', label: 'Índice UV', value: 6, unit: '/11+', status: 'atencao', detail: 'Proteção solar recomendada' },
  { id: 'rain', label: 'Chuva (24h)', value: 0, unit: 'mm', status: 'normal', detail: 'Probabilidade: 12%' },
]

export const alerts: ClimateAlert[] = [
  { id: 'ALT-2025-0891', title: 'Temperatura extremamente elevada', description: 'Risco severo de insolação e sobrecarga energética na região norte de Sorocaba.', category: 'Temperatura do ar', severity: 'critico', station: 'Setor Norte — Parque das Águas', value: 39, unit: '°C', safeLimit: 'Limite superior: 30°C', createdAt: 'Hoje, 15:42', resolved: false },
  { id: 'ALT-2025-0888', title: 'Umidade muito baixa', description: 'Estado de alerta para desidratação e risco de queimadas em áreas periurbanas.', category: 'Umidade relativa', severity: 'alerta', station: 'Periurbana Leste — Brigadeiro Tobias', value: 18, unit: '%', safeLimit: 'Limite crítico: 20%', createdAt: 'Hoje, 14:20', resolved: false },
  { id: 'ALT-2025-0871', title: 'Temperatura acima da média', description: 'Elevação progressiva acima da média sazonal em área central.', category: 'Temperatura', severity: 'atencao', station: 'Centro Histórico', value: 32, unit: '°C', safeLimit: 'Média histórica: 29,2°C', createdAt: 'Hoje, 12:10', resolved: false },
  { id: 'ALT-2025-0840', title: 'Rajadas de vento moderadas', description: 'Movimentação de poeira e galhos; atenção em áreas externas.', category: 'Velocidade do vento', severity: 'atencao', station: 'Aeroporto de Sorocaba', value: 42, unit: 'km/h', safeLimit: 'Direção: SSE', createdAt: 'Hoje, 09:15', resolved: false },
]

export const sensors: Sensor[] = [
  { id: 'SN-METEO-01', name: 'Sonda Vaisala WXT536', location: 'Campus Universitário', parameters: ['Temperatura', 'Umidade', 'Pressão'], battery: 98, latency: 120, calibration: '12/Jan/2025', status: 'normal' },
  { id: 'SN-PLUVIO-02', name: 'Pluviômetro Óptico', location: 'Parque das Águas', parameters: ['Pluviometria', 'Vazão'], battery: 94, latency: 115, calibration: '03/Fev/2025', status: 'normal' },
  { id: 'SN-ANEMO-03', name: 'Anemômetro Ultrassônico', location: 'Zona Industrial', parameters: ['Vento', 'Rajadas'], battery: 96, latency: 138, calibration: '28/Nov/2024', status: 'normal' },
  { id: 'SN-RAD-04', name: 'Piranômetro UV', location: 'Paço Municipal', parameters: ['Índice UV', 'Radiação'], battery: 91, latency: 142, calibration: '15/Dez/2024', status: 'atencao' },
]

export const hourlyTemperature = [
  { time: '00:00', value: 19 }, { time: '04:00', value: 18 }, { time: '08:00', value: 21 },
  { time: '12:00', value: 25 }, { time: '16:00', value: 29 }, { time: '20:00', value: 25.5 }, { time: 'Agora', value: 24 },
]
