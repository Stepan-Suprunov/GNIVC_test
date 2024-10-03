import styles from './style.module.scss'

type NameInputPropsType = {
    placeholder: string
};

export function NameInput({placeholder}: NameInputPropsType) {
    return (
        <div className={styles.nameInput}>
            <input className={styles.input}/>
            <label className={styles.placeholder}>
                {placeholder}
            </label>
        </div>
    );
};