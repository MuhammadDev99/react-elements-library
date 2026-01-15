import clsx from "clsx";
import styles from "./App.module.css";
import { signal } from "@preact/signals-react";
import { useState } from "react";
import { Button, CheckboxInput, ColorSelector, Progressbar, RadioInput, Slider, Textbox, ToggleInput, Dropdown } from './components/index'

function App() {
    const dropdownOptions = [{ value: 'USA', text: 'United States' }, { value: 'Canada', text: 'Canada' }, { value: 'UK', text: 'United Kingdom' }, { value: 'Germany', text: 'Germany' }]
    return (
        <div className={styles.container}>
            <div>
                <p>form progress</p>
                <Progressbar value={22} maxValue={100} />
            </div>
            <div>
                <p>Write name</p>
                <Textbox label="Name" textboxType="text" />
            </div>
            <div>
                <p>Email and password</p>
                <Textbox label="Email Adress" textboxType="email" />
                <Textbox label="Password" textboxType="password" />
            </div>
            <div>
                <p>Select Country</p>
                <Dropdown label="Select Country" options={dropdownOptions} />
            </div>
            <ColorSelector label="Select Color" />
            <div className={styles.floatingGroup}>
                <Textbox label="Select Date" textboxType="date" />
            </div>
            <div>
                <p>Select gender</p>
                <RadioInput label="Male" name="gender" />
                <RadioInput label="Female" name="gender" />
            </div>
            <div>
                <p>Select communication method</p>
                <CheckboxInput label="Phone" startValue={true} />
                <CheckboxInput label="Email" />
            </div>
            <div>
                <p>Write a message</p>
                <Textbox label="Message" textboxType="textarea" />
            </div>
            <div>
                <p>Customize settings</p>
                <ToggleInput label="Enable nwotifications" />
                <ToggleInput label="Recive promotional emails" />
            </div>
            <div>
                <p>Action buttons</p>
                <div className={styles.actionButtons}>
                    <Button text="Submit" />
                    <Button text="Clear fields" isPrimary={true} />
                    <Button text="Refresh page" />
                </div>
            </div>
            <Slider label="Volume" />
        </div>
    );
}

export default App;