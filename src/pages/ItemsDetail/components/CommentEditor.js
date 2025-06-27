import { useState } from "react";
import profileImage from "../../../assets/images/profile-image.png";
import styles from "./CommentEditor.module.css";
import { getTimeAgo } from "../../../utils/getTimeAgo";

export function CommentEditor({ comment, onSave, onCancel }) {
  const [value, setValue] = useState(comment.content);

  return (
    <div className={styles.inquiryCommentEditBox}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.editTextarea}
      />
      
      <div className={styles.inquiryCommentFooter}>
        <div className={styles.profileGroup}>
          <img
            src={profileImage}
            alt="프로필 이미지"
            style={{ width: "32px", height: "32px" }}
          />
          <div>
            <p className={styles.inquiryWriter}>{comment.writer.nickname}</p>
            <p className={styles.inquiryUpdatedAt}>{getTimeAgo(comment.updatedAt)}</p>
          </div>
        </div>
        <div className={styles.editActions}>
          <button className={styles.cancelButton} onClick={onCancel}>
            취소
          </button>
          <button className={styles.editButton} onClick={() => onSave(value)}>
            수정 완료
          </button>
        </div>
      </div>
    </div>
  );
}
