import styles from './style.module.scss'

type ButtonPropsType = {
    title: string
    type?: string
};

export function Button({title, type}: ButtonPropsType) {

    return (
        <div className={styles.button}>
            <button type='submit'>{title}</button>
        </div>
    );
};

Button.defaultProps = {
    type: 'button',
};