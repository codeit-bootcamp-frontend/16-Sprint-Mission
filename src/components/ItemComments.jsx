import styles from "./ItemComments.module.css";
import { useEffect, useState } from "react";
import { getItemComments } from "../utils/api";
import CommentCard from "./CommentCard";

const INQUIRE_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const ItemComments = ({ itemId }) => {
  const [comments, setComments] = useState([]);

  const loadItemComments = async () => {
    const result = await getItemComments(itemId);
    const { list } = result;
    setComments(list);
  };

  useEffect(() => {
    (async () => {
      await loadItemComments();
    })();
  }, []);

  return (
    <section className={styles["section"]}>
      <div className={styles["inquire-container"]}>
        <form className={styles["inquire-form"]}>
          <label className={styles["inquire-label"]}>
            문의하기
            <textarea
              className={styles["input-textarea"]}
              placeholder={INQUIRE_PLACEHOLDER}
            />
          </label>
          <button className={`button-style ${styles["submit"]}`}>등록</button>
        </form>
      </div>
      <div className={styles["comment-container"]}>
        {comments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}
      </div>
      <button className={`button-style ${styles["back-button"]}`}>
        목록으로 돌아가기
        <img
          className={"back-button-image"}
          src={"/images/ic_back.png"}
          width={24}
        />
      </button>
    </section>
  );
};

export default ItemComments;
