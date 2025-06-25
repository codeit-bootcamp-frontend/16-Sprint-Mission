import React, { useCallback, useState } from 'react';
import KebabMenu from '@components/KebabMenu';
import UserProfileCard from '@components/userProfileCard';
import AskForm from './AskForm';
import styles from './styles/CommentItem.module.css';

function CommentItem({ comment }) {
  const [isEditNow, setIsEditNow] = useState(false);

  const handleSelect = useCallback(() => {
    setIsEditNow(!isEditNow);
  }, []);

  return (
    <li className={styles.commentItem}>
      {isEditNow ? (
        <AskForm
          method={'UPDATE'}
          comment={comment.content}
          setIsEditNow={setIsEditNow}
        />
      ) : (
        <>{comment.content}</>
      )}

      <UserProfileCard
        authority={'comment'}
        image={comment.writer.image}
        name={comment.writer.nickname}
        time={comment.updatedAt}
      />
      {!isEditNow && <KebabMenu onSelect={handleSelect} />}
    </li>
  );
}

export default CommentItem;
