import styles from "./CommentRequireForm.module.css";
import { useState } from "react";

const INQUIRE_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const CommentRequireForm = ({ onSubmit }) => {
  const [inquireText, setInquireText] = useState("");

  const handleInquireTextChange = (e) => {
    setInquireText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isInquireValid = !inquireText;

  return (
    <form className={styles["inquire-form"]} onSubmit={handleSubmit}>
      <label className={styles["inquire-label"]}>
        문의하기
        <textarea
          className={styles["input-textarea"]}
          placeholder={INQUIRE_PLACEHOLDER}
          value={inquireText}
          onChange={handleInquireTextChange}
        />
      </label>
      <div className={styles["button-container"]}>
        <button
          className={`button-style ${styles["submit"]}`}
          disabled={isInquireValid}
        >
          등록
        </button>
      </div>
    </form>
  );
};

export default CommentRequireForm;
