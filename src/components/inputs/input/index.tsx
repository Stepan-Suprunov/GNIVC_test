import styles from './style.module.scss'
import React from 'react';

type NameInputPropsType = {
    label: string
    type: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
};

export function Input({label, type, name, value, onChange, error}: NameInputPropsType) {

    return (
        <div className={styles.inputBlock}>
            <input className={error ? styles.input__error : styles.input}
                   type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
            />
            <label className={value ? styles.label__valid : styles.label}>
                {label}
            </label>
            <div className={styles.errorBlock}>
                <span className={styles.error}>
                    {error}
                </span>
            </div>
        </div>
    );
};