import type { Severity } from '@/types/climate'
export function getSeverity(value:number, warning:number, critical:number):Severity { if(value>=critical)return 'critico'; if(value>=warning)return 'atencao'; return 'normal' }
