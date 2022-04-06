import styles from "./index.module.css";

export const PageLayout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
