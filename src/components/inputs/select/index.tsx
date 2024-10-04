import styles from './style.module.scss'
import React from 'react';

type SelectPropsType = {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    options: Array<OptionType>
};

type OptionType = {
    value: string
    label: string
};

export function Select({label, name, value, onChange, options}: SelectPropsType) {

    return (
        <div className={styles.selectInput}>

            <select className={styles.select}
                    name={name}
                    value={value}
                    onChange={onChange}
            >
                {options.map((option: OptionType) => (
                    <option className={styles.option}
                            value={option.value}
                    >
                        {option.label}
                    </option>))}
            </select>
            <label className={styles.label}>
                {label}
            </label>
        </div>
    );
};