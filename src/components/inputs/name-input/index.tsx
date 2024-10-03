import styles from './style.module.scss'
import React from "react";

type NameInputPropsType = {
    label: string
    type: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    error?: string
};

export function NameInput({label, type, name, value, onChange, error, placeholder}: NameInputPropsType) {

    return (
        <div className={styles.nameInput}>
            <input className={styles.input}
                   type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
            />
            <label className={styles.label}>
                {label}
            </label>
            <span className={styles.error}>
                {error}
            </span>
        </div>
    );
};