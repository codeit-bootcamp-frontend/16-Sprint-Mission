import styles from "./styles/FailLoad.module.css";

function LoadFailed() {
  return (
    <p className={styles.errMsg}>
      죄송합니다 목록을 가져오는 데에 실패했습니다.
    </p>
  );
}

export default LoadFailed;
