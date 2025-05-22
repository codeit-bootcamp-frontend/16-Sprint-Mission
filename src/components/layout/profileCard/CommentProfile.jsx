import styles from "./CommentProfile.module.css";

const CommentProfile = ({ ProfileImgUrl, nickname, timeStamp }) => {
  return (
    <div className={styles["profile-container"]}>
      <img className={styles["profile-image"]} src={ProfileImgUrl} width={32} />
      <div className={styles["profile-context"]}>
        <span className={styles["profile-name"]}>{nickname}</span>
        <span className={styles["time-stamp"]}>{timeStamp}</span>
      </div>
    </div>
  );
};

export default CommentProfile;
