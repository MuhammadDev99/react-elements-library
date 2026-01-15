import { useState } from 'react'
import styles from '../style.module.css'

interface CheckboxProps {
    label: string;
    startValue?: boolean;
    onChange?: (value: boolean) => void;
}

export default function CheckboxInput({ label, startValue = false, onChange }: CheckboxProps) {
    const [checked, setChecked] = useState<boolean>(startValue);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.checked;
        setChecked(newValue);
        onChange?.(newValue);
    }

    return (
        <label className={styles.checkboxItem}>
            <input
                className={styles.hiddenInput}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <span className={styles.customCheckbox} ></span>
            <span className={styles.labelTitle}>{label}</span>
        </label>
    );
}