import { useState } from "react";
import styles from "./CommentCard.module.css";
import CommentEditForm from "./CommentEditForm";
import CommentView from "./CommentView";

const CommentCard = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className={styles["container"]}>
      {isEditing ? (
        <CommentEditForm
          comment={comment}
          onSubmit={handleSubmitEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <CommentView
          comment={comment}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      )}
    </div>
  );
};

export default CommentCard;
