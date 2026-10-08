import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './ui.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  icon?: ReactNode
  loading?: boolean
}

export function Button({ variant = 'primary', icon, loading, children, disabled, ...props }: ButtonProps) {
  return <button className={`btn btn-${variant}`} disabled={disabled || loading} {...props}>{icon}{loading ? 'Carregando…' : children}</button>
}
