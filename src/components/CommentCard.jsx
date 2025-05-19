import { formatDateKRW } from "../utils/formatPrice";
import styles from "./Comment.module.css";

const CommentCard = ({ comment }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <span className={styles["content"]}>{comment.content}</span>
        <div className={styles["profile-container"]}>
          <img
            className={styles["profile-image"]}
            src={"/images/icon_profile.png"}
            width={32}
          />
          <div className={styles["profile-context"]}>
            <span className={styles["profile-name"]}>
              {comment.writer.nickname}
            </span>
            <span className={styles["updatedate"]}>
              {formatDateKRW(comment.updatedAt)}
            </span>
          </div>
        </div>
      </div>
      <img
        className={styles["details-kebab"]}
        src={"/images/ic_kebab.png"}
        width={24}
      />
    </div>
  );
};

export default CommentCard;
