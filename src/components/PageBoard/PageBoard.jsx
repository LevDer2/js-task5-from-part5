import styles from "./PageBoard.module.css";

function PageBoard({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default PageBoard;
