import clsx from 'clsx'
import styles from '../style.module.css'
export default function Button({ text, isPrimary, onClick }: { text: string, isPrimary?: boolean, onClick?: () => void }) {
    const cssSelectors = isPrimary ? clsx(styles.button, styles.buttonPrimary) : clsx(styles.button)
    return (
        <button className={cssSelectors} onClick={onClick}>{text}</button>
    )
}