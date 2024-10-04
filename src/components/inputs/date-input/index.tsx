import styles from './style.module.scss'
import React from 'react';

type DateInputPropsType = {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    error?: string
};

export function DateInput({label, name, value, onChange, error, placeholder}: DateInputPropsType) {

    return (
        <div className={styles.dateInput}>
            <input className={error ? styles.input__error : styles.input}
                   type='date'
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
            />
            <label className={styles.label}>
                {label}
            </label>
            <div className={styles.errorBlock}>
                <span className={styles.error}>
                    {error ? 'Поле является обязательным' : null}
                </span>
            </div>
        </div>
    );
};