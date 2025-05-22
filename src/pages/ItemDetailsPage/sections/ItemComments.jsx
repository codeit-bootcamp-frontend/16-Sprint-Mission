import styles from "./ItemComments.module.css";
import { getItemComments } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import CommentRequireForm from "../../../components/comments/CommentRequireForm";
import CommentsContainer from "../../../components/comments/CommentsContainer";
import { useAsync } from "../../../hooks/useAsync";
import LoadingSpinner from "../../../components/layout/LoadingSpinner/LoadingSpinner";

const ItemComments = ({ itemId }) => {
  const navigate = useNavigate();

  const { result } = useAsync(getItemComments, itemId);
  const comments = result?.list;

  const handleReturnToListClick = (e) => {
    e.preventDefault();
    navigate("/items");
  };

  return (
    <section className={styles["section"]}>
      <CommentRequireForm />
      {!comments && (
        <div className={styles["comment-loading-container"]}>
          <LoadingSpinner />
        </div>
      )}
      {comments && comments?.length > 0 && <CommentsContainer comments={comments} />}
      {comments && comments?.length === 0 && (
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
