import clsx from 'clsx'
import styles from '../style.module.css'
export default function Dropdown({ label, options, defaultValueIndex, onChange }: { defaultValueIndex?: number, label: string, options: Array<{ text: string, value: string }>, onChange?: (value: string) => void }) {
    const defaultValue = defaultValueIndex && options.length > defaultValueIndex ? options[defaultValueIndex].value : null
    return (
        <div className={clsx(styles.floatingGroup)}>
            <select className={clsx(styles.floatingGroupInput, styles.selectBox)} defaultValue={defaultValue ?? ""} required onChange={(e) => onChange?.(e.target.value)}>
                <option value="" disabled hidden></option>
                {options.map((option, index) => {
                    return (<option value={option.value} key={index}>{option.text}</option>)
                })}
            </select>
            <label className={styles.floatingGroupLabel}>{label}</label>
        </div>
    )
}