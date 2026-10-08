import type { HTMLAttributes, ReactNode } from 'react'
import './ui.css'

interface CardProps extends HTMLAttributes<HTMLElement> { title?: string; action?: ReactNode }

export function Card({ title, action, children, className = '', ...props }: CardProps) {
  return <section className={`card ${className}`} {...props}>{(title || action) && <header className="card-header">{title && <h2>{title}</h2>}{action}</header>}{children}</section>
}
