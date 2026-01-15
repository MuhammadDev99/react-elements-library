import styles from '../style.module.css'

export default function Progressbar({ value, maxValue }: { value: number, maxValue: number }) {
    return (<progress value={value} max={maxValue} className={`${styles.progressbar} ${value === maxValue ? styles.full : ""}`} ></progress>)
}