import styles from './style.module.scss'
import React from 'react';

type MainLayoutPropsType = {
    children: React.ReactNode;
};

export function MainLayout({children}: MainLayoutPropsType) {

    return (
        <div className={styles.main}>
            {children}
        </div>
    );
};