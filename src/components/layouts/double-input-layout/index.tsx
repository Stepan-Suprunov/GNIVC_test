import styles from './style.module.scss'
import React from 'react';

type DoubleInputLayoutPropsType = {
    children: React.ReactNode;
};

export function DoubleInputLayout({children}: DoubleInputLayoutPropsType) {

    return (
        <div className={styles.doubleInput}>
            {children}
        </div>
    );
};