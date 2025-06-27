import { useComments } from "../hooks/useComments";
import { CommentItem } from "./CommentItem";
import noInquiryImage from "../../../assets/images/no-inquiry.svg";
import styles from "./CommentList.module.css";

export function CommentList({ productId }) {
  const { comments, loading, error, remove, update } = useComments(productId);
  if (loading) return <p>로딩 중…</p>;
  if (error) return <p>오류: {error.message}</p>;

  if (comments.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src={noInquiryImage}
          alt="문의 없음"
          className={styles.noIquiryImg}
        />
      </div>
    );
  }

  return comments.map((comment) => (
    <CommentItem
      key={comment.id}
      comment={comment}
      onDelete={() => remove(comment.id)}
      onUpdate={(newContent) => update(comment.id, newContent)}
    />
  ));
}
