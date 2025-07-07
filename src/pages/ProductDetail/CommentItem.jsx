import { useState } from 'react';
import KebabMenu from '@components/KebabMenu';
import UserProfileCard from '@components/userProfileCard';
import { calculateRelativeTime } from '@utils/calculateRelativeTime';
import AskForm from './AskForm';
import styles from './styles/CommentItem.module.css';

const DROPDOWN_LIST = {
  UPDATE: '수정하기',
  DELETE: '삭제하기',
};

function CommentItem({ comment }) {
  const [isEditNow, setIsEditNow] = useState(false);

  function onSelect(selector) {
    //코멘트에서 케밥에 내려줄 함수
    if (selector === DROPDOWN_LIST.UPDATE) setIsEditNow((prev) => !prev);
    else if (selector === DROPDOWN_LIST.DELETE) {
      alert('준비 중인 기능입니다(댓글 삭제)');
    }
  }

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
        time={calculateRelativeTime(comment.updatedAt)}
      />
      {!isEditNow && (
        <KebabMenu
          dropdownList={Object.values(DROPDOWN_LIST)}
          onSelect={onSelect}
        />
      )}
    </li>
  );
}

export default CommentItem;
