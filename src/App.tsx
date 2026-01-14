import clsx from "clsx";
import styles from "./App.module.css";
import { signal } from "@preact/signals-react";
import { useState } from "react";

function ColorSelectorView() {
    type HexColor = `#${string}`
    const [color, setColor] = useState<HexColor>('#ffffff')
    return (<label className={styles.colorSelectorItem}>
        <span>Select favorite color</span>
        <input className={styles.hiddenInput} value={color} onChange={(e) => setColor(e.target.value as HexColor)} type="color" />
        <span className={styles.customColorbox} style={{ backgroundColor: color }}></span>
    </label>)
}
function ProgressbarView() {
    const [fillAmount, setFillAmount] = useState<number>(44)
    const maxValue = 100
    return (<progress value={fillAmount} max={maxValue} className={`${styles.progressbar} ${fillAmount === maxValue ? styles.full : ""}`} ></progress>)
}

function RangeInputView() {
    const [value, setValue] = useState<number>(10)
    const percentage = `${value}%`
    return (<div className={styles.rangeInputContainer}>
        <div className={styles.rangeInputInfo}>
            <p className={styles.label}>Volume</p>
            <p className={styles.amountText}>{value}%</p>
        </div>
        <input className={styles.rangeInput} value={value} onChange={(e) => setValue(Number(e.target.value))} type="range" style={{ ['--range-progress' as any]: percentage }} />
    </div>)
}
function App() {
    return (
        <div className={styles.container}>
            <div>
                <p>form progress</p>
                <ProgressbarView />
            </div>
            <div>
                <p>Write name</p>
                <div className={clsx(styles.floatingGroup)}>
                    <input className={styles.floatingGroupInput} placeholder=" " type="text" />
                    <label className={styles.floatingGroupLabel}>Name</label>
                </div>
            </div>
            <div>
                <p>Email and password</p>
                <div className={clsx(styles.floatingGroup)}>
                    <input className={styles.floatingGroupInput} placeholder=" " type="email" />
                    <label className={styles.floatingGroupLabel} >Email Adress</label>
                </div>
                <div className={clsx(styles.floatingGroup)}>
                    <input className={styles.floatingGroupInput} placeholder=" " type="password" />
                    <label className={styles.floatingGroupLabel}>Password</label>
                </div>
            </div>
            <div>
                <p>Select Country</p>
                <div className={clsx(styles.floatingGroup)}>
                    <select className={clsx(styles.floatingGroupInput, styles.selectBox)} defaultValue="" required>
                        <option value="" disabled hidden></option>
                        <option >United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                    </select>
                    <label className={styles.floatingGroupLabel}>Select Country</label>
                </div>
            </div>
            <ColorSelectorView />
            <div className={styles.floatingGroup}>
                <input className={styles.floatingGroupInput} type="date" />
                <label className={styles.floatingGroupLabel}>Select birthday</label>
            </div>
            <div>
                <p>Select gender</p>
                <label className={styles.radioItem}>
                    <input className={styles.hiddenInput} type="radio" name="gender" />
                    <span className={styles.customRadio}></span>
                    <span >Male</span>
                </label>
                <label className={styles.radioItem}>
                    <input className={styles.hiddenInput} type="radio" name="gender" />
                    <span className={styles.customRadio}></span>
                    <span>Female</span>
                </label>
            </div>
            <div>
                <p>Select communication method</p>
                <label className={styles.checkboxItem}>
                    <input className={styles.hiddenInput} type="checkbox" />
                    <span className={styles.customCheckbox}></span>
                    <span>Phone</span>
                </label>
                <label className={styles.checkboxItem}>
                    <input className={styles.hiddenInput} type="checkbox" />
                    <span className={styles.customCheckbox}></span>
                    <span>Email</span>
                </label>
            </div>
            <div>
                {/* <div>
                <p>Write name</p>
                <div className={clsx(styles.floatingGroup)}>
                    <input className={styles.floatingGroupInput} placeholder=" " type="text" />
                    <label className={styles.floatingGroupLabel}>Name</label>
                </div>
            </div> */}
                <p>Write a message</p>
                <div className={clsx(styles.floatingGroup)}>
                    <textarea className={styles.floatingGroupInput} placeholder=" "></textarea>
                    <label className={styles.floatingGroupLabel}>Message</label>
                </div>
            </div>
            <div>
                <p>Customize settings</p>
                <label className={styles.switchItem}>
                    <span>Enable nwotifications</span>
                    <input className={styles.hiddenInput} type="checkbox" />
                    <span className={styles.customSwitch}></span>
                </label>
                <label className={styles.switchItem}>
                    <span>Recive promotional emails</span>
                    <input className={styles.hiddenInput} type="checkbox" />
                    <span className={styles.customSwitch}></span>
                </label>
            </div>
            <div>
                <p>Action buttons</p>
                <div className={styles.actionButtons}>
                    <button className={clsx(styles.button)} type="submit">Submit</button>
                    <button className={clsx(styles.button, styles.buttonPrimary)}>Clear fields</button>
                    <button className={clsx(styles.button)}>Refresh page</button>
                </div>
            </div>
            <RangeInputView />
        </div>
    );
}

export default App;