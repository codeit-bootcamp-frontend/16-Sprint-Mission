import CommentCard from "./CommentCard";
import styles from "./CommentsContainer.module.css";

const CommentsContainer = ({ comments }) => {
  return (
    <div className={styles["comment-container"]}>
      {comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentsContainer;
