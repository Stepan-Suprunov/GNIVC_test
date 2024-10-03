import styles from './style.module.scss'

type ButtonPropsType = {
    title: string
};

export function Button({title}: ButtonPropsType) {

    return (
        <div className={styles.button}>
            <button>{title}</button>
        </div>
    );
};