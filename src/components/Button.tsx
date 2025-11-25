import './Button.css'

interface ButtonProps {
    onClick: () => void
    children: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
    return (
        <button className="done-button" onClick={onClick}>
            {children}
        </button>
    )
}
