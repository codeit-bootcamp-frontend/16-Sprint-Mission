import Loading from '../Loading/Loading';
import useFetch from "../../hooks/useFetch"; 
import { getComments, getMoreComments } from "../../api/ProductApi"; 
import CommentEdit from './CommentEdit';
import Comment from './Comment';
import emptyImg from '../../assets/input/Img_empty.svg'
import { useState, useEffect, useCallback } from 'react'; 
import Button from '../Button/Button';
import styles from './CommentList.module.css'

export default function CommentList({ id }) {
  
  const [allComments, setAllComments] = useState([]);
  
  const [currentCursor, setCurrentCursor] = useState('');
  
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [moreError, setMoreError] = useState(null);

  
  const { isLoading, error, result } = useFetch(getComments, id);


  useEffect(() => {
    if (result && result.list) {
      setAllComments(result.list);
      setCurrentCursor(result.nextCursor || ''); 
    }
  }, [result]); 

  const handleEditClick = (commentId) => {
    setEditingCommentId(commentId);
  };

  const handleDeleteClick = (commentId) => {
    console.log(`댓글 삭제 요청: ${commentId}`);
    alert('로그인 후 이용 부탁드립니다.');
  };

  const handleEditComplete = () => {
    setEditingCommentId(null);
  };
  const handleLoadMoreComments = useCallback(async () => {
    if (!currentCursor || isMoreLoading) { 
      return;
    }

    setIsMoreLoading(true);
    setMoreError(null); 

    try {
      const moreResult = await getMoreComments(id, currentCursor);
      setAllComments(prevComments => [...prevComments, ...moreResult.list]);
      setCurrentCursor(moreResult.nextCursor || '');
    } catch (err) {
      setMoreError(err);
    } finally {
      setIsMoreLoading(false); 
    }
  }, [id, currentCursor, isMoreLoading]); 

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>댓글을 불러오는 중 오류가 발생했습니다: {error.message}</p>;
  }

  


  return (
    <div>
      {allComments && allComments.length > 0 ? (
        allComments.map((comment) => (
          <div key={comment.id || comment.createdAt} className="comment-item-wrapper">
            {editingCommentId === comment.id ? (
              <CommentEdit
                comment={comment}
                onEditComplete={handleEditComplete}
              />
            ) : (
              <Comment
                comment={comment}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            )}
          </div>
        ))
      ) : (
        <div className={styles.noComment}>
          <img src={emptyImg} alt='문의가 없어요' />
          <p>아직 문의가 없어요</p>
        </div>
      )}
      {currentCursor && ( 
        <div className={styles.button}>
          <Button
          onClick={handleLoadMoreComments}
          disabled={isMoreLoading}
          buttonText={isMoreLoading ? '로딩 중...' : '더 많은 댓글 보기...' }
          className={'more'}
        />
        </div>
        )}
    </div>
  );
}

