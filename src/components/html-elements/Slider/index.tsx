import { useState } from 'react'
import styles from '../style.module.css'

export default function Slider({ label, defaultValue, onChange }: { label: string, defaultValue?: number, onChange?: (value: number) => void }) {
    const [value, setValue] = useState<number>(defaultValue ?? 0)
    const percentage = `${value}%`
    function handleChange(value: number) {
        setValue(value);
        onChange?.(value)
    }
    return (<div className={styles.rangeInputContainer}>
        <div className={styles.rangeInputInfo}>
            <p className={styles.label}>{label}</p>
            <p className={styles.amountText}>{value}%</p>
        </div>
        <input className={styles.rangeInput} value={value} onChange={(e) => handleChange(Number(e.target.value))} type="range" style={{ ['--range-progress' as any]: percentage }} />
    </div>)
}