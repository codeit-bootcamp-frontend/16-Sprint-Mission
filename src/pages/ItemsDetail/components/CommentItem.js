import { useState } from "react";
import { CommentEditor } from "./CommentEditor";
import { ReadOnlyComment } from "./ReadOnlyComment";
import styles from "./CommentItem.module.css";

export function CommentItem({ comment, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <CommentEditor
          comment={comment}
          onSave={(val) => {
            onUpdate(val);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ReadOnlyComment
          comment={comment}
          onEdit={() => setIsEditing(true)}
          onDelete={onDelete}
        />
      )}
      <hr className={styles.divider} />
    </>
  );
}
