import styles from './Checkbox.module.css'

interface CheckboxProps {
    checked: boolean
    onChange: (checked: boolean) => void
    label: string
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
    return (
        <label className={styles.checkboxLabel}>
            <span>{label}</span>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className={styles.checkboxInput}
            />
            <span className={styles.checkboxCustom}></span>
        </label>
    )
}