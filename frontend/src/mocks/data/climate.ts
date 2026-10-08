import type { ClimateAlert, ClimateMetric, Sensor, Severity, Station } from '@/types/climate'

export const stations: Station[] = [
  { id: 'BR-SP-04', name: 'Estação Central', city: 'Sorocaba', state: 'SP', provider: 'Defesa Civil / INMET', reliability: 99.4, lastSyncAt: 'há 2 min' },
  { id: 'BR-PR-02', name: 'Estação Jardim Botânico', city: 'Curitiba', state: 'PR', provider: 'SIMEPAR / Defesa Civil', reliability: 98.8, lastSyncAt: 'há 3 min' },
  { id: 'BR-PE-08', name: 'Estação Recife Antigo', city: 'Recife', state: 'PE', provider: 'APAC / Defesa Civil', reliability: 97.9, lastSyncAt: 'há 1 min' },
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

export interface DashboardData { status:Severity; statusLabel:string; headline:string; summary:string; comfort:number; comfortLabel:string; metrics:ClimateMetric[]; hourly:{time:string;value:number}[]; minimum:number; average:number; maximum:number; recentAlert:{severity:Severity;title:string;description:string} }
export const stationDashboardData:Record<string,DashboardData>={
  'BR-SP-04':{status:'normal',statusLabel:'STATUS ATUAL: NORMAL',headline:'Condições climáticas dentro da faixa esperada',summary:'Nenhum plano de contingência ativo para a microrregião de Sorocaba.',comfort:94,comfortLabel:'Confortável',metrics:currentMetrics,hourly:hourlyTemperature,minimum:18.9,average:22.8,maximum:26.2,recentAlert:{severity:'alerta',title:'Temperatura acima da média',description:'Pico temporário de 31.8°C registrado na estação auxiliar.'}},
  'BR-PR-02':{status:'atencao',statusLabel:'STATUS ATUAL: ATENÇÃO',headline:'Chuva persistente e queda de temperatura',summary:'Monitoramento preventivo de alagamentos e rajadas na região metropolitana de Curitiba.',comfort:72,comfortLabel:'Ameno',metrics:[{id:'temperature',label:'Temperatura',value:16,unit:'°C',status:'atencao',detail:'Sensação térmica de 14°C'},{id:'humidity',label:'Umidade',value:89,unit:'%',status:'atencao',detail:'Umidade elevada'},{id:'wind',label:'Vento',value:27,unit:'km/h',status:'atencao',detail:'Rajadas de até 41 km/h'},{id:'thermal',label:'Sensação',value:14,unit:'°C',status:'atencao',detail:'Desconforto por frio'},{id:'uv',label:'Índice UV',value:2,unit:'/11+',status:'normal',detail:'Índice baixo'},{id:'rain',label:'Chuva (24h)',value:34,unit:'mm',status:'alerta',detail:'Risco de alagamento'}],hourly:[{time:'00:00',value:18},{time:'04:00',value:17},{time:'08:00',value:16},{time:'12:00',value:17},{time:'16:00',value:16},{time:'20:00',value:15},{time:'Agora',value:16}],minimum:14.8,average:16.4,maximum:18.3,recentAlert:{severity:'alerta',title:'Chuva intensa em curto período',description:'Acumulado de 34 mm nas últimas 24 horas; atenção para áreas de drenagem.'}},
  'BR-PE-08':{status:'alerta',statusLabel:'STATUS ATUAL: ALERTA',headline:'Calor e umidade elevam o desconforto térmico',summary:'Protocolo preventivo de hidratação ativo para Recife e municípios costeiros.',comfort:48,comfortLabel:'Abafado',metrics:[{id:'temperature',label:'Temperatura',value:32,unit:'°C',status:'alerta',detail:'3°C acima da média'},{id:'humidity',label:'Umidade',value:76,unit:'%',status:'atencao',detail:'Sensação de abafamento'},{id:'wind',label:'Vento',value:19,unit:'km/h',status:'normal',detail:'Brisa marítima de leste'},{id:'thermal',label:'Sensação',value:38,unit:'°C',status:'critico',detail:'Estresse térmico alto'},{id:'uv',label:'Índice UV',value:10,unit:'/11+',status:'critico',detail:'Proteção solar obrigatória'},{id:'rain',label:'Chuva (24h)',value:4,unit:'mm',status:'normal',detail:'Pancadas isoladas'}],hourly:[{time:'00:00',value:27},{time:'04:00',value:26},{time:'08:00',value:28},{time:'12:00',value:31},{time:'16:00',value:33},{time:'20:00',value:29},{time:'Agora',value:32}],minimum:25.7,average:29.4,maximum:33.2,recentAlert:{severity:'critico',title:'Índice UV extremo',description:'Índice UV 10 previsto entre 11h e 14h; evite exposição solar direta.'}}
}
