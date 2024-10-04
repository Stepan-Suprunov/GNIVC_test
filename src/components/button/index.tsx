import styles from './style.module.scss'

type ButtonPropsType = {
    title: string
    type?: 'submit' | 'reset' | 'button'
};

export function Button({title, type}: ButtonPropsType) {

    return (
        <div className={styles.button}>
            <button type={type}>{title}</button>
        </div>
    );
};