import { describe,expect,it } from 'vitest'; import { getSeverity } from './severity'
describe('getSeverity',()=>{it('classifica limites climáticos',()=>{expect(getSeverity(24,30,38)).toBe('normal');expect(getSeverity(32,30,38)).toBe('atencao');expect(getSeverity(39,30,38)).toBe('critico')})})
