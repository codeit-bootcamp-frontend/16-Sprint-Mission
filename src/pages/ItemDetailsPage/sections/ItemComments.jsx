import styles from "./ItemComments.module.css";
import { useEffect, useState } from "react";
import { getItemComments } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import CommentRequireForm from "../../../components/comments/CommentRequireForm";
import CommentsContainer from "../../../components/comments/CommentsContainer";

const ItemComments = ({ itemId }) => {
  const [comments, setComments] = useState([]);

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
        <CommentsContainer comments={comments} />
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
