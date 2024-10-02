import styles from './style.module.scss'

type HeadingPropsType = {
    title: string
};

export function Heading({title}: HeadingPropsType) {
    return (
        <div className={styles.heading}>
            <span>{title}</span>
        </div>
    );
};