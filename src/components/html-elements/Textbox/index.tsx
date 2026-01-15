import clsx from 'clsx'
import { errorImage } from '../../../media'
import styles from '../style.module.css'
type TextboxType = 'text' | 'email' | 'password' | 'date' | 'textarea'
export default function Textbox({ label, textboxType, onChange }: { label: string, textboxType: TextboxType, onChange?: (value: string) => void }) {
    if (textboxType === 'text') {
        return (
            <div className={clsx(styles.floatingGroup)}>
                <input className={styles.floatingGroupInput} placeholder=" " type="text" onChange={(e) => onChange?.(e.target.value)} />
                <label className={styles.floatingGroupLabel}>{label}</label>
            </div>
        )
    }
    if (textboxType === 'email') {
        return (
            <div className={clsx(styles.floatingGroup)}>
                <input className={styles.floatingGroupInput} placeholder=" " type="email" onChange={(e) => onChange?.(e.target.value)} />
                <label className={styles.floatingGroupLabel} >{label}</label>
            </div>
        )
    }
    if (textboxType === 'password') {
        return (<div className={clsx(styles.floatingGroup)}>
            <input className={styles.floatingGroupInput} placeholder=" " type="password" onChange={(e) => onChange?.(e.target.value)} />
            <label className={styles.floatingGroupLabel}>{label}</label>
        </div>)
    }
    if (textboxType === 'date') {
        return (
            <div className={styles.floatingGroup}>
                <input className={styles.floatingGroupInput} type="date" onChange={(e) => onChange?.(e.target.value)} />
                <label className={styles.floatingGroupLabel}>{label}</label>
            </div>
        )
    }
    if (textboxType === 'textarea') {
        return (<div className={clsx(styles.floatingGroup)}>
            <textarea className={styles.floatingGroupInput} placeholder=" " onChange={(e) => onChange?.(e.target.value)}></textarea>
            <label className={styles.floatingGroupLabel}>{label}</label>
        </div>)
    }
    return (<img src={errorImage} />)

}