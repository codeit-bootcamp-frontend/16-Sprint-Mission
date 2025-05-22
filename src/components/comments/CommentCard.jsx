import { useState } from "react";
import styles from "./CommentCard.module.css";
import CommentEditForm from "./CommentEditForm";
import CommentView from "./CommentView";

const CommentCard = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [zIndex, setZIndex] = useState(0);
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

  const handleKebabOpen = () => {
    setZIndex(1);
  };

  const handleKebabClose = () => {
    setZIndex(0);
  };

  const containerStyle = {
    zIndex: zIndex,
  };

  return (
    <div style={containerStyle} className={styles["container"]}>
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
          onKebabOpen={handleKebabOpen}
          onKebabClose={handleKebabClose}
        />
      )}
    </div>
  );
};

export default CommentCard;
