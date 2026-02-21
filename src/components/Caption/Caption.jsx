import styles from "./Caption.module.css";

function Caption({title}) {
    return(
        <h1 className={styles.caption}>{title}</h1>
    )
}

export default Caption