import { render,screen } from '@testing-library/react'; import { describe,expect,it } from 'vitest'; import { StatusBadge } from './StatusBadge'
describe('StatusBadge',()=>{it('apresenta o estado também em texto',()=>{render(<StatusBadge status="critico"/>);expect(screen.getByText('Crítico')).toBeInTheDocument()})})
