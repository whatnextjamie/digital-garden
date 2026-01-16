import styles from './styles.module.css'
import type { ContainerProps } from './types'

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      {children}
    </div>
  )
}
