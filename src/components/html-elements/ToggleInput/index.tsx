import { useState } from 'react';
import styles from '../style.module.css'

export default function ToggleInput({ label, startValue = false, onChange }: { label: string, startValue?: boolean, onChange?: (value: boolean) => void }) {

    const [checked, setChecked] = useState<boolean>(startValue);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.checked;
        setChecked(newValue);
        onChange?.(newValue);
    }


    return (
        <label className={styles.switchItem}>
            <span>{label}</span>
            <input className={styles.hiddenInput} onChange={handleChange} type="checkbox" checked={!!checked} />
            <span className={styles.customSwitch}></span>
        </label>
    )
}