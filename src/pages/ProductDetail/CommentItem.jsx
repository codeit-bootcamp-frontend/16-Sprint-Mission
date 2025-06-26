import React, { useCallback, useState } from 'react';
import KebabMenu from '@components/KebabMenu';
import UserProfileCard from '@components/userProfileCard';
import AskForm from './AskForm';
import styles from './styles/CommentItem.module.css';

function CommentItem({ comment }) {
  const [isEditNow, setIsEditNow] = useState(false);

  const onSelect = useCallback((selector) => {
    //수정하기 삭제하기 나눠서 줘야할듯?
    if (selector === '수정하기') setIsEditNow(!isEditNow);
    else if (selector === '삭제하기') alert('준비 중인 기능입니다(댓글 삭제)');
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
      {!isEditNow && <KebabMenu onSelect={onSelect} />}
    </li>
  );
}

export default CommentItem;
