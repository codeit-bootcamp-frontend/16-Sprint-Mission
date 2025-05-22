import styles from "./ItemComments.module.css";
import { useEffect, useState } from "react";
import { getItemComments } from "../../../utils/api";
import CommentCard from "../../../components/CommentCard";
import { useNavigate } from "react-router-dom";
import CommentRequireForm from "../../../components/CommentRequireForm";

const ItemComments = ({ itemId }) => {
  const [comments, setComments] = useState([]);
  const [kebabSelectedId, setKebabSelectedId] = useState(null);

  const navigate = useNavigate();

  const loadItemComments = async () => {
    const result = await getItemComments(itemId);
    const { list } = result;
    setComments(list);
  };

  const handleReturnToListClick = (e) => {
    e.preventDefault();
    navigate("/items");
  };

  useEffect(() => {
    (async () => {
      await loadItemComments();
    })();
  }, []);

  return (
    <section className={styles["section"]}>
      <CommentRequireForm />
      {comments.length > 0 ? (
        <div className={styles["comment-container"]}>
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.id}
                comment={comment}
                kebabSelectedId={kebabSelectedId}
                setKebabSelectedId={setKebabSelectedId}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles["comment-none-container"]}>
          <img src={"/images/img_comment_none.png"} width={196} />
          <span className={styles["comment-none-text"]}>아직 문의가 없어요</span>
        </div>
      )}
      <button
        className={`button-style ${styles["back-button"]}`}
        onClick={handleReturnToListClick}
      >
        목록으로 돌아가기
        <img className={"back-button-image"} src={"/images/ic_back.png"} width={24} />
      </button>
    </section>
  );
};

export default ItemComments;
