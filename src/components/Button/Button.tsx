import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
    children: React.ReactNode
}

export function Button({ className, onClick, children }: ButtonProps) {
    return (
        <button className={`${styles.doneButton} ${className || ''}`} onClick={onClick}>
            {children}
        </button>
    )
}