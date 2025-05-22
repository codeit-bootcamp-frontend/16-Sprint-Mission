import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["dot"]} style={{ "--i": 0 }}></div>
      <div className={styles["dot"]} style={{ "--i": 1 }}></div>
      <div className={styles["dot"]} style={{ "--i": 2 }}></div>
      <div className={styles["dot"]} style={{ "--i": 3 }}></div>
      <div className={styles["dot"]} style={{ "--i": 4 }}></div>
      <div className={styles["dot"]} style={{ "--i": 5 }}></div>
      <div className={styles["dot"]} style={{ "--i": 6 }}></div>
      <div className={styles["dot"]} style={{ "--i": 7 }}></div>
      <div className={styles["dot"]} style={{ "--i": 8 }}></div>
      <div className={styles["dot"]} style={{ "--i": 9 }}></div>
      <div className={styles["dot"]} style={{ "--i": 10 }}></div>
      <div className={styles["dot"]} style={{ "--i": 11 }}></div>
    </div>
  );
};

export default LoadingSpinner;
